from unittest.mock import patch
from app.services.llm_service import process_with_llm

@patch('app.services.llm_service.requests.post')
def test_process_with_llm(mock_post):
    mock_post.return_value.status_code = 200
    mock_post.return_value.json.return_value = {"response": "Processed Text"}

    result = process_with_llm("Test text")
    assert result == {"response": "Processed Text"}
