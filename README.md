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

### Running Both Servers

You can run both servers simultaneously:

- Python server on port `8000`
- Node.js server on port `3000`

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
curl -X POST -H "Content-Type: application/json" -d '{"text": "New task"}' http://localhost:3000/tasks  # Node.js
```
