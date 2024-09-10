# fastapi_neon/main.py

from fastapi import FastAPI
from .routes import speech
from dotenv import load_dotenv
import os
from fastapi.middleware.cors import CORSMiddleware


# Load environment variables from .env
load_dotenv()

# Get the base URL from the .env file
BASE_URL = os.getenv("BASE_URL", "http://localhost:8000")
ALLOW_ORIGINS = os.getenv("ALLOW_ORIGINS")

app = FastAPI(title="Desktop AI Personal Assistant", 
    version="0.0.1",
    servers=[
        {
            "url": BASE_URL, 
            "description": "Back-end Server"
        }
        ])


# Configure CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[ALLOW_ORIGINS],  # Update this with specific origins if needed
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)


# Include routes from different modules
app.include_router(speech.router, prefix="/speech")


@app.get("/")
def read_root():
    return {"Hello": "World"}
