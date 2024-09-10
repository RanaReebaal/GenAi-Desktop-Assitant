import requests  # Or any other HTTP client library of your choice
from typing import Dict
from dotenv import load_dotenv
import os

load_dotenv()

LLM_ENDPOINT = os.getenv("LLM_ENDPOINT")
LLM_API_KEY = os.getenv("LLM_API_KEY")


# Define a function to send text to the LLM
def process_with_llm(text: str) -> Dict:
    # Replace with your LLM API endpoint and key
    llm_endpoint = LLM_ENDPOINT
    llm_api_key = LLM_API_KEY

    headers = {
        "Authorization": f"Bearer {LLM_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "text": text
    }

    response = requests.post(llm_endpoint, json=payload, headers=headers)

    if response.status_code == 200:
        return response.json()
    else:
        response.raise_for_status()
