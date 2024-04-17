import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
config();
import morgan from "morgan";

import { connectDatabase } from "./db/connect.js";
import appRouter from "./routes/index.js";

const app = express();
app.use(express.json());

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(cors());
app.use(morgan("dev"));
app.use("/api", appRouter);

const PORT: number = 3000;

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port : ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
