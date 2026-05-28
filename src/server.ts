import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req: Request, res: Response) => {
    res.send("Hello from TypeScript Express Server!");
});

// About route
app.get("/about", (req: Request, res: Response) => {
    res.send("This is a simple server.ts example.");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});