from curl_cffi.requests import AsyncSession
from urllib.parse import unquote
from fastapi import Request, Response
from fastapi.responses import StreamingResponse

async def proxy_video_stream(url: str, request: Request):
    if not url:
        return Response("URL not provided", status_code=400)

    clean_url = unquote(url)

    # Proteção básica
    if "127.0.0.1" in clean_url or "localhost" in clean_url:
        return Response("Loop detected", status_code=400)

    # A VPN já cuida do acesso às câmeras restritas geograficamente, recomendo o Proton VPN pra uso gratuito
    # Aqui só cuidamos de fingir ser o Chrome (impersonate)
    s = AsyncSession(impersonate="chrome120", verify=False)

    try:
        # Timeout de 30s
        r = await s.get(clean_url, stream=True, timeout=30)

        if "m3u8" in clean_url or "mpegurl" in r.headers.get("content-type", "").lower():
            content = await r.acontent()
            text_content = content.decode("utf-8")
            
            base_url = clean_url.rsplit('/', 1)[0]
            local_proxy = str(request.base_url) + "proxy_stream?url="

            new_lines = []
            for line in text_content.splitlines():
                line = line.strip()
                if not line or line.startswith("#"):
                    new_lines.append(line)
                else:
                    original_segment = line
                    if not original_segment.startswith("http"):
                        original_segment = f"{base_url}/{original_segment}"
                    new_lines.append(f"{local_proxy}{original_segment}")
            
            modified_m3u8 = "\n".join(new_lines)
            await s.close()
            return Response(content=modified_m3u8, media_type="application/vnd.apple.mpegurl")

        else:
            async def iter_content():
                try:
                    async for chunk in r.aiter_content():
                        yield chunk
                finally:
                    await s.close()

            return StreamingResponse(
                iter_content(), 
                media_type=r.headers.get("content-type")
            )

    except Exception as e:
        print(f"🔥 Erro no Proxy: {e}")
        await s.close()
        return Response(f"Proxy Error: {e}", status_code=500)