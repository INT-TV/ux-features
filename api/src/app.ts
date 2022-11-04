import express from "express";
import session from "express-session";
import cors from "cors";
import bodyParser from "body-parser";
import testsRouter from "./routes/testsRouter";
import { requestLogger } from "./utils/middleware";
import { SESSION_SECRET } from "./utils/config";

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(
  session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(requestLogger);

// routes
app.use("/ping", testsRouter);

export default app;
