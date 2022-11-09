import express from "express"
import session, { MemoryStore } from "express-session"
import cors from "cors"
import bodyParser from "body-parser"
import passport from "passport"
import testsRouter from "./routes/testsRouter"
import { Profile, Scope, Strategy, VerifyCallback } from "@oauth-everything/passport-twitch"
import { requestLogger } from "./utils/middleware"
import { SESSION_SECRET, TWITCH_CLIENT_ID, TWITCH_SECRET } from "./utils/config"

// passport config
// TODO: serialization needs interfaces
passport.serializeUser(function (user, done) {
  done(null, user)
})

// TODO: proper deserialization
// eslint-disable-next-line @typescript-eslint/no-explicit-any
passport.deserializeUser(function (obj: any, done) {
  done(null, obj)
})

passport.use(
  new Strategy(
    {
      clientID: TWITCH_CLIENT_ID,
      clientSecret: TWITCH_SECRET,
      callbackURL: "http://localhost:3000/auth/twitch/callback",
    },
    // TODO: done should be VerifyCallback<ExampleUser>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
      console.log(`succesfully received accessToken: ${accessToken}, refresh: ${refreshToken}, profile: ${profile}`)

      done(null, profile)
    }
  )
)

// middleware
const app = express()
app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new MemoryStore(),
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("./public"))
app.use(requestLogger)

// routes
app.use("/ping", testsRouter)

app.post('/logout', (req, res, next) => {
    req.logout(err => {
        if (err) return next(err)
        res.redirect('/')
    })
})

// twitch passport routing
app.get("/auth/twitch", passport.authenticate("twitch"))

app.get("/auth/twitch/callback", passport.authenticate("twitch", {
    failureRedirect: "/login",
    successRedirect: "/"
}))

// TODO: route to front-end
app.get("/", (req, res) => {
  if (req.isAuthenticated()) {
      // User is logged in
      res
          .status(200)
          .header('Content-Type', 'text/html')
          .send(`
              <h2>Welcome ${req.user}!</h2>
              <p><code>req.user<code>:</p>
              <pre>${JSON.stringify(req.user)}</pre>
              <form action="/logout" method="post"><input type="submit" value="Logout"></form>
          `)
  } else {
      // User is not logged in
      res
          .status(200)
          .header('Content-Type', 'text/html')
          .send(`
              <a href="/auth/twitch">Login with your Twitch account</a>
          `)
  }
})

export default app
