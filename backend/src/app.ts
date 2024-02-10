import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";

config(); // load .env

const app = express();

// using JSON for req and res
app.use(express.json());

app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export default app;
