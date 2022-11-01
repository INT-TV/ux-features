import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import passport from "passport";
import twitchPassport from "passport-twitch-latest";
import testsRouter from "./routes/testsRouter";

dotenv.config();
const twichStrategy = twitchPassport.Strategy;

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cookieSession({secret:"somesecrettokenhere"}));
app.use(passport.initialize());
app.use(express.static("./public"));

app.use("/ping", testsRouter);

app.listen(PORT, () => {
  console.log(`app running on port: ${PORT}`);
});
