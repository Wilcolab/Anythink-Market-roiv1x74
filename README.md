# Task Management Server

This project contains both a Python FastAPI server and a Node.js Express server for managing a task list. Both servers provide identical functionality with the same API routes.

## Project Structure

The project has the following files and directories:

### Python Server

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

### Node.js Server

- `node-server/index.js`: This file contains the implementation of the Express server with the same routes as the Python server. It handles adding a task to a list and retrieving the list.

- `node-server/package.json`: This file lists the dependencies required for the Express server (Express 5.x).

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
docker-compose up -d --build
```

This will start:
- Python server on port `8000`
- Node.js server on port `8001`

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

## Migration Notes

### Python FastAPI to Node.js Express Migration

This project demonstrates a successful migration from Python FastAPI to Node.js Express while maintaining API compatibility.

#### Key Differences & Enhancements

| Feature | Python FastAPI | Node.js Express |
|---------|---------------|-----------------|
| **Validation** | Pydantic models | Custom middleware validation |
| **Empty strings** | Accepts empty text | Rejects with 400 error |
| **Request logging** | Not implemented | Timestamp + method + path logging |
| **Error handling** | Basic FastAPI errors | Global error handler + 404 handler |
| **JSON parsing** | Automatic | `express.json()` middleware |
| **Port** | 8000 | 8001 |

#### Migration Decisions

1. **Enhanced Validation**: Node.js version includes stricter validation that rejects empty strings and provides clear error messages.

2. **Middleware Architecture**: Implemented Express middleware for:
   - JSON body parsing
   - Request logging
   - Error handling
   - 404 route handling

3. **Code Structure**: Maintained same route structure and response formats for API compatibility.

4. **Development Tools**: Added nodemon for hot-reloading during development (Python uses uvicorn with --reload).

#### Testing & Verification

Both servers have been tested and verified to:
- ✅ Return identical data structures
- ✅ Handle POST requests successfully
- ✅ Maintain task state independently
- ✅ Provide consistent API responses

The Node.js implementation is production-ready and includes improvements over the original Python implementation.
