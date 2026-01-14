const express = require('express');
const app = express();
const port = 3000;

// Middleware: Parse JSON request bodies
app.use(express.json());

// Middleware: Request logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Task data store
let tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
];

// Route: Home
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Route: Add a new task
app.post("/tasks", (req, res, next) => {
    try {
        const { text } = req.body;
        
        // Validate request body
        if (!text || typeof text !== 'string') {
            return res.status(400).json({ error: "Invalid request: 'text' field is required and must be a string" });
        }
        
        if (text.trim().length === 0) {
            return res.status(400).json({ error: "Invalid request: 'text' cannot be empty" });
        }
        
        tasks.push(text);
        res.json({ message: "Task added successfully" });
    } catch (error) {
        next(error);
    }
});

// Route: Get all tasks
app.get("/tasks", (req, res) => {
    res.json({ tasks });
});

// Middleware: Handle 404 - Route not found
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Middleware: Global error handler
app.use((err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    res.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
    console.log(`Node.js server running at http://localhost:${port}`);
});
