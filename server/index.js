import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const PORT = 3000;
const app = express();
app.use(helmet());

app.get("/", (req, res) => {
  res.send("<h1>Hello Helmet</h1>");
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});

// app.use(express.json());

// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// app.use(morgan("common"));
