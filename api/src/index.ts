import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import testsRouter from "./routes/testsRouter";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/ping", testsRouter);

app.listen(PORT, () => {
  console.log(`app running on port: ${PORT}`);
});
