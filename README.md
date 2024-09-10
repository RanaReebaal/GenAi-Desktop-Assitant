# GenAi Desktop Assistant

## Overview
The GenAi Desktop Assistant is a virtual personal assistant application designed to enhance productivity through voice commands. The application enables users to navigate their PC, open folders, and play songs using voice inputs. It leverages state-of-the-art technologies to provide a seamless and interactive experience.

## Tech Stack
- **Front-End:** Next.js, TypeScript, React, Tailwind
- **Back-End:** FastAPI, Python, Pydantic
- **APIs:** Gemini or OpenAI (for LLM and speech-to-text functionality)

## Getting Started

### Prerequisites
- Docker (for containerized deployment)
- Docker Compose (for managing multi-container setups)

### Running with Docker
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/genai-desktop-assistant.git
    cd genai-desktop-assistant
    ```

2. Build and run the Docker containers:
    ```bash
    docker-compose up --build
    ```

3. Access the application:
    - Front-End: `http://localhost:3000`
    - Back-End: `http://localhost:8000`

### Running Without Docker

#### Front-End
1. Navigate to the front-end directory:
    ```bash
    cd front-end
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

4. Access the application at `http://localhost:3000`.

#### Back-End
1. Navigate to the back-end directory:
    ```bash
    cd back-end
    ```

2. Install dependencies using Poetry:
    ```bash
    poetry install
    ```

3. Run the application:
    ```bash
    poetry run uvicorn app.main:app --reload
    ```

4. Access the API at `http://localhost:8000`.

## Directory Structure

- **front-end**: Contains the Next.js application.
- **back-end**: Contains the FastAPI application.
- **docker-compose.yml**: Configuration file for Docker Compose.

For more details, refer to the README files in the `front-end` and `back-end` directories.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
