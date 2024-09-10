from fastapi import APIRouter
from pydantic import BaseModel
from ..services.llm_service import process_with_llm


# Define a Pydantic model for the request body
class SpeechInput(BaseModel):
    text: str

router = APIRouter()

@router.post("/")
async def receive_speech_text(speech_input: SpeechInput):
    text = speech_input.text
    print(f"Received Speech Text: {text}")

    # Process text with LLM
    try:
        llm_response = process_with_llm(text)
        print(f"LLM Response: {llm_response}")
        return {"message": "Text processed successfully", "llm_response": llm_response}
    except Exception as e:
        print(f"Error processing text with LLM: {e}")
        return {"message": "Failed to process text", "error": str(e)}
