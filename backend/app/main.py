from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from app.data.cameras import get_all_cameras
from app.services.proxy import proxy_video_stream

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/proxy_stream")
async def stream_proxy(url: str, request: Request):
    return await proxy_video_stream(url, request)

@app.get("/cameras")
async def read_cameras():
    return get_all_cameras()