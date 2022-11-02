import dotenv from "dotenv";
import validateEnv from "./../utils/validateProcessEnv";
import { SessionSecret, TwitchConfig } from "./../utils/types";

dotenv.config();

export const TWITCH_CLIENT_ID: TwitchConfig = validateEnv.parseTwitchConfig(
  process.env.TWITCH_CLIENT_ID
);
export const TWITCH_SECRET: TwitchConfig = validateEnv.parseTwitchConfig(
  process.env.TWITCH_SECRET
);
export const SESSION_SECRET: SessionSecret = validateEnv.parseSessionSecret(
  process.env.SESSION_SECRET
);
export const CALLBACK_URL = "http://localhost:3001/auth/twitch/callback";
export const PORT = process.env.PORT || 3001;