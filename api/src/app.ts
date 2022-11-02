import { SESSION_SECRET } from './utils/config';
import express from "express";
import session from "express-session";
import cors from "cors";
import bodyParser from "body-parser";
import testsRouter from "./routes/testsRouter";

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(
  session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

// routes
app.use("/ping", testsRouter);

app.listen(PORT, () => {
  console.log(`app running on port: ${PORT}`);
});

export default app;