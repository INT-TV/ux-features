import express from "express";
import session from "express-session";
declare module "express-session" {
  interface Session {
    userId: string;
  }
}
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import passport from "passport";
import twitchPassport from "passport-twitch-latest";
import testsRouter from "./routes/testsRouter";
import { SessionSecret, TwitchConfig } from "./utils/types";
import validateEnv from "./utils/validateProcessEnv";

dotenv.config();
const twitchStrategy = twitchPassport.Strategy;
const app = express();
const PORT = process.env.PORT;

// Define our constants, you will change these with your own
const TWITCH_CLIENT_ID: TwitchConfig = validateEnv.parseTwitchConfig(
  process.env.TWITCH_CLIENT_ID
);
const TWITCH_SECRET: TwitchConfig = validateEnv.parseTwitchConfig(
  process.env.TWITCH_SECRET
);
const SESSION_SECRET: SessionSecret = validateEnv.parseSessionSecret(
  process.env.SESSION_SECRET
);
const CALLBACK_URL = "http://localhost:3001/auth/twitch/callback";

// Middlewares
app.use(express.json());
app.use(cors());
app.use(
  session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(express.static("./public"));

// passport config
passport.use(
  new twitchStrategy(
    {
      clientID: TWITCH_CLIENT_ID,
      clientSecret: TWITCH_SECRET,
      callbackURL: CALLBACK_URL,
      scope: "user_read",
    },
    function (
      accessToken: unknown,
      refreshToken: unknown,
      profile: unknown,
      done: unknown
    ) {
      console.log("passport function callback");
      console.log(
        `accessToken: ${accessToken} refresh: ${refreshToken} profile: ${profile} done: ${done}`
      );

      // User.findOrCreate({ twitchId: profile.id }, function (err, user) {
      //   return done(err, user);
      // });
    }
  )
);

// passport.serializeUser(function (user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//   done(null, user);
// });

app.use("/ping", testsRouter);

app.get("/auth/twitch", passport.authenticate("twitch"));
app.get(
  "/auth/twitch/callback",
  passport.authenticate("twitch", { failureRedirect: "/" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

app.listen(PORT, () => {
  console.log(`app running on port: ${PORT}`);
});
