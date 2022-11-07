# ux-features

## UX Demos by Dev

Going to list off a few different designs I'm thinking of when it comes to managing different streams on one home-page. 

## To do

- [x] TypeScript API
- [ ] TypeScript front end

### Goals

The website needs to accomplish two goals: 
 - show new streamers what they don't know they need to know
 - connect new streamers to each other

### Challenges
The left shift key on my laptop is broken, thank you Apple. I learned a lot about how to authenticate requests to a protected resource via OAuth2 protocol. It seems like a lot of back and forth, you have to essentially get the auth token from the resource owner, then send it alongside the request for the resource, then you get to parse the data. Each of these steps can likely be handled with some library, and in the demo code the TWitch API has linked the author uses the Passport library -- I cannot get it to work.

Instead I found a github repo of a website that uses the Twitch API, nobody.live, and saw the author manually setup the auth in his Python scraper, so I figured I'd do the same with my little Node project.

This could be useful demo code for somebody down the line, or may be a waste of my time and I should just figure out Passport.
