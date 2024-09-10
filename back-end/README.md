# GenAi Desktop Assistant Back-End

## Overview
The back-end of the GenAi Desktop Assistant is built with FastAPI and Python. It handles API requests, processes voice commands, and interacts with external APIs for LLM and speech-to-text functionalities.

## Tech Stack
- **FastAPI**: Modern web framework for building APIs with Python 3.8+.
- **Python**: Programming language used for the back-end logic.
- **Pydantic**: Data validation and settings management library.

## Getting Started

### Prerequisites
- Python 3.8 or higher
- Poetry (dependency management and packaging tool)

### Running the Application
1. Clone the repository if not already done:
    ```bash
    git clone https://github.com/yourusername/genai-desktop-assistant.git
    cd genai-desktop-assistant/back-end
    ```

2. Install dependencies using Poetry:
    ```bash
    poetry install
    ```

3. Start the FastAPI server:
    ```bash
    poetry run uvicorn app.main:app --reload
    ```

4. Access the API at `http://localhost:8000`.

## Directory Structure

- **app/**: Contains the main application logic, models, and routes.
- **tests/**: Contains unit tests for the back-end services.
- **main.py**: Entry point for the FastAPI application.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
