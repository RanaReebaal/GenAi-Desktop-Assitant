from fastapi.testclient import TestClient
from app.main import app  # Import the FastAPI app from main.py

client = TestClient(app)

def test_receive_speech_text():
    response = client.post("/speech", json={"text": "Hello World"})
    assert response.status_code == 200
    assert response.json() == {"message": "Text received successfully"}
