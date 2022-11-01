import { SessionSecret, TwitchConfig } from "./types";

const isSessionSecret = (param: unknown): param is SessionSecret => {
  return typeof param === "string" || Array.isArray(param);
};

const parseSessionSecret = (param: unknown): SessionSecret => {
  if (isSessionSecret(param)) {
    return param;
  } else {
    throw new Error(`malformatted session secret: ${param}`);
  }
};

const isTwichConfig = (param: unknown): param is TwitchConfig => {
  return typeof param === 'string';
}

const parseTwitchConfig = (param: unknown): TwitchConfig => {
  if (isTwichConfig(param)) {
    return param;
  } else {
    throw new Error(`malformatted config var: ${param}`);
  }
}

export default {
  parseSessionSecret,
  parseTwitchConfig
};
