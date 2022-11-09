import { TWITCH_CLIENT_ID, TWITCH_SECRET, SESSION_SECRET, CALLBACK_URL } from "./../utils/config"

const generateOAuthToken = () => {
  console.log(TWITCH_CLIENT_ID, TWITCH_SECRET, SESSION_SECRET, CALLBACK_URL)
}

module.exports = {
  generateOAuthToken,
}
