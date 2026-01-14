# Task Management Server

This project contains both a Python FastAPI server and a Node.js Express server for managing a task list. Both servers provide identical functionality with the same API routes.

## Migration Overview

This repository demonstrates a successful migration from Python FastAPI to Node.js Express, showcasing how to modernize your tech stack while maintaining API compatibility. The migration was completed using GitHub Copilot to ensure code quality and consistency.

### Why We Migrated

- **Unified Technology Stack**: Consolidating to JavaScript/Node.js for full-stack development
- **Express 5.x Features**: Leveraging the latest Express framework with improved performance and async/await support
- **Modern Node.js**: Using Node.js 18+ with enhanced features and long-term support
- **Docker Support**: Both servers are containerized for easy deployment and scalability

### Migration Highlights

- ✅ All API endpoints migrated with identical functionality
- ✅ Request validation and error handling implemented
- ✅ Logging middleware for request tracking
- ✅ Docker and docker-compose configuration
- ✅ Comprehensive documentation and examples

## Project Structure

The project has the following files and directories:

### Python Server

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

### Node.js Server (Migrated)

- `node-server/index.js`: This file contains the Express 5.x server implementation, migrated from the Python FastAPI server. It includes:
  - Request validation middleware
  - Error handling middleware
  - Request logging
  - All original API endpoints with identical functionality

- `node-server/package.json`: Dependencies configuration featuring Express 5.2.1 and development tools like nodemon

- `node-server/Dockerfile`: Docker configuration using Node.js 18 (required for Express 5.x)

### Shared

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

### Running the Python Server (Docker)

To run the FastAPI server using Docker, follow these steps:

1. Build and start the Docker containers by running the following command:

   ```shell
   docker compose up
   ```

   This command will build the Docker image for the FastAPI server and start the containers defined in the `docker-compose.yml` file.

2. The FastAPI server should now be running. You can access it at port `8000`.

### Running the Node.js Server

To run the Express server, follow these steps:

1. Navigate to the node-server directory:

   ```shell
   cd node-server
   ```

2. Install dependencies:

   ```shell
   npm install
   ```

3. Start the server:

   ```shell
   npm start
   ```

4. The Express server should now be running. You can access it at port `3000`.

### Running Both Servers with Docker Compose

You can run both servers simultaneously using Docker Compose:

```shell
docker compose up
```

This will start:
- Python FastAPI server on port `8000`
- Node.js Express server on port `8001` (mapped from container port 8001)

Both services will have hot-reload enabled for development.

## API Routes

Both servers provide the following API routes:

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Returns "Hello World" |
| `/tasks` | GET | Retrieves the task list |
| `/tasks` | POST | Adds a task to the task list (body: `{"text": "task description"}`) |

### Example Usage

Get all tasks:
```shell
curl http://localhost:8000/tasks  # Python server
curl http://localhost:3000/tasks  # Node.js server
```

Add a new task:
```shell
curl -X POST -H "Content-Type: application/json" -d '{"text": "New task"}' http://localhost:8000/tasks  # Python
curl -X POST -H "Content-Type: application/json" -d '{"text": "New task"}' http://localhost:8001/tasks  # Node.js
```

## Technology Stack

### Python Server
- **Framework**: FastAPI
- **Runtime**: Python 3.9
- **Server**: Uvicorn

### Node.js Server
- **Framework**: Express 5.2.1
- **Runtime**: Node.js 18+
- **Package Manager**: npm/yarn
- **Dev Tools**: nodemon for hot-reload

## Development

### Prerequisites
- Docker and Docker Compose
- Node.js 18+ (for local Node.js development)
- Python 3.9+ (for local Python development)

### Environment Setup

For Node.js development:
```shell
cd node-server
npm install
npm start
```

For Python development:
```shell
cd python-server
pip install -r requirements.txt
uvicorn src.main:app --reload --port 8000
```

## Contributing

This project was migrated using GitHub Copilot, demonstrating best practices for:
- API endpoint migration
- Request/response handling
- Error handling and validation
- Code documentation
- Docker containerization

## License

ISC
