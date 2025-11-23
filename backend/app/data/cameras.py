# Proxy necessário para evitar bloqueio de CORS no navegador
PROXY_BASE = "http://127.0.0.1:8000/proxy_stream?url="

CAMERAS = [
    {
        "id": 1,
        "name": "Las Vegas Blvd & Caesars Dr",
        "location": "Turn 13 Area",
        "rtc_id": "CAM-003",
        "stream_url": PROXY_BASE + "https://d1wse2.its.nv.gov:443/vegasxcd02/164d50b6-4c0c-44ca-bb80-8dae3666f214_lvflirxcd03_public.stream/playlist.m3u8",
        "lat": 36.1166, "lon": -115.1729
    },
    {
        "id": 2,
        "name": "Sands Ave & Palazzo - Sphere",
        "location": "Sphere Zone",
        "rtc_id": "CAM-004",
        "stream_url": PROXY_BASE + "https://d1wse4.its.nv.gov:443/vegasxcd04/84512278-97ad-4bc7-af27-24d3251c6396_lvflirxcd04_public.stream/playlist.m3u8",
        "lat": 36.1213, "lon": -115.1693
    },
    {
        "id": 3,
        "name": "Flamingo Rd & Las Vegas Blvd",
        "location": "Sector 1 - Heart of Strip",
        "rtc_id": "CAM-001",
        "stream_url": PROXY_BASE + "https://d1wse3.its.nv.gov:443/vegasxcd03/c250fce9-1e47-479e-99eb-a28ba37fe962_lvflirxcd03_public.stream/playlist.m3u8",
        "lat": 36.1147, "lon": -115.1729
    },
    {
        "id": 4,
        "name": "Las Vegas Blvd & Bellagio",
        "location": "Fountains View",
        "rtc_id": "CAM-002",
        "stream_url": PROXY_BASE + "https://d1wse2.its.nv.gov:443/vegasxcd02/333a58ca-72ea-4ca8-a641-b9bb0579b4ed_lvflirxcd03_public.stream/playlist.m3u8",
        "lat": 36.1129, "lon": -115.1765
    },
    {
        "id": 5,
        "name": "Las Vegas Blvd & City Center",
        "location": "Aria NE Arena",
        "rtc_id": "CAM-005",
        "stream_url": PROXY_BASE + "https://d1wse2.its.nv.gov:443/vegasxcd02/20fa0804-12f8-4c74-93ea-cfa880ca73bc_lvflirxcd03_public.stream/playlist.m3u8",
        "lat": 36.1080, "lon": -115.1729
    },
    {
        "id": 6,
        "name": "Las Vegas Blvd & Harrahs",
        "location": "Mirage Exit",
        "rtc_id": "CAM-006",
        "stream_url": PROXY_BASE + "https://d1wse2.its.nv.gov:443/vegasxcd02/6dc51cf7-33ad-454d-b129-b6043b4fc1f1_lvflirxcd03_public.stream/playlist.m3u8",
        "lat": 36.1195, "lon": -115.1729
    },
    {
        "id": 7,
        "name": "Las Vegas Blvd & Mirage",
        "location": "Venetian Area",
        "rtc_id": "CAM-007",
        "stream_url": PROXY_BASE + "https://d1wse2.its.nv.gov:443/vegasxcd02/3d995f6b-442b-4fd0-a2b1-5c08245dc063_lvflirxcd03_public.stream/playlist.m3u8",
        "lat": 36.1210, "lon": -115.1729
    },
    {
        "id": 8,
        "name": "Las Vegas Blvd & Planet Hollywood",
        "location": "Strip South",
        "rtc_id": "CAM-008",
        "stream_url": PROXY_BASE + "https://d1wse2.its.nv.gov:443/vegasxcd02/e994f4b0-edd9-48d6-8dfd-8379ab4f5091_lvflirxcd03_public.stream/playlist.m3u8",
        "lat": 36.1100, "lon": -115.1720
    },
    {
        "id": 9,
        "name": "Las Vegas Blvd & Sirens Cove",
        "location": "Palazzo",
        "rtc_id": "CAM-009",
        "stream_url": PROXY_BASE + "https://d1wse3.its.nv.gov:443/vegasxcd03/3bd493c4-4dc4-49f1-9238-a1753f23829b_lvflirxcd04_public.stream/playlist.m3u8",
        "lat": 36.1230, "lon": -115.1729
    },
    {
        "id": 10,
        "name": "Las Vegas Blvd & Spring Mtn",
        "location": "Sphere Turn",
        "rtc_id": "CAM-010",
        "stream_url": PROXY_BASE + "https://d1wse2.its.nv.gov:443/vegasxcd02/d30da79c-c940-4369-8b3b-3cb086aaec28_lvflirxcd03_public.stream/playlist.m3u8",
        "lat": 36.1271, "lon": -115.1729
    },
    {
        "id": 11,
        "name": "Harmon Ave & Las Vegas Blvd",
        "location": "Cosmo / Final Turn",
        "rtc_id": "CAM-011",
        "stream_url": PROXY_BASE + "https://d1wse2.its.nv.gov:443/vegasxcd02/fe3007b2-972a-4c91-ab9e-985a9109f9d6_lvflirxcd03_public.stream/playlist.m3u8",
        "lat": 36.1070, "lon": -115.1729
    }
]

def get_all_cameras():
    return CAMERAS