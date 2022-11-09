import express from "express";
import session from "express-session";
import cors from "cors";
import bodyParser from "body-parser";
import testsRouter from "./routes/testsRouter";
import passport from "passport";
import twitchPassport from "passport-twitchtv";
import { requestLogger } from "./utils/middleware";
import {
  SESSION_SECRET,
  TWITCH_CLIENT_ID,
  TWITCH_SECRET,
} from "./utils/config";

// passport config TODO: refactor to middleware
const TwitchtvStrategy = twitchPassport.Strategy;
passport.use(
  new TwitchtvStrategy(
    {
      clientID: TWITCH_CLIENT_ID,
      clientSecret: TWITCH_SECRET,
      callbackURL: "http://localhost:3000/auth/twitchtv/callback",
      scope: "user_read",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      return done(null, profile);
      // process.nextTick(function () {
      //   return done(null, profile);
      // });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj: false | null, done) {
  done(null, obj);
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

// middleware
const app = express();
app.use(express.json());
app.use(cors());
app.use(
  session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(requestLogger);
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use("/ping", testsRouter);

// twitch passport routing
app.get("/", function (req, res) {
  res.send(`user: ${req.user}`);
});

app.get("/account", ensureAuthenticated, function (req, res) {
  res.send(`account: ${req.user}`);
});

app.get("/login", function (req, res) {
  res.send(`login page for: ${req.user}`);
});

app.get(
  "/auth/twitchtv",
  passport.authenticate("twitchtv", { scope: ["user_read"] }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function (_req, _res) {
    // The request will be redirected to Twitch.tv for authentication, so this
    // function will not be called.
  }
);

app.get(
  "/auth/twitchtv/callback",
  passport.authenticate("twitchtv", {
    failureRedirect: "/login",
  }),
  function (req, res) {
    res.redirect("/");
  }
);

app.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

export default app;
