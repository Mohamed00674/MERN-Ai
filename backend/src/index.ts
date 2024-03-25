import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();
import morgan from "morgan"

import { connectDatabase } from "./db/connect.js";
import userRoutes from "./routes/Auth.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"))
app.use("/api" , userRoutes )

const PORT: number = 3000;

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port : ${PORT}`);
    });
  })
  .catch((err) => console.log(err) );
