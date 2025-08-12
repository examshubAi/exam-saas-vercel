from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from firebase_service import generate_download_url
from ai_services import process_query
import os

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/search")
async def search_papers(query: str):
    results = process_query(query)
    return {"results": results}

@app.get("/api/download/{paper_id}")
async def download_paper(paper_id: str):
    download_url = generate_download_url(paper_id)
    if not download_url:
        raise HTTPException(status_code=404, detail="Paper not found")
    return {"download_url": download_url}
