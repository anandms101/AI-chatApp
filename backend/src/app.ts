import express from "express";
import { config } from "dotenv";

config(); // load .env

const app = express();

// using JSON for req and res
app.use(express.json());

export default app;
