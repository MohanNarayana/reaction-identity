import { Meteor } from "meteor/meteor";
import Logger from "@mailchimpopencommerce/logger";
import config from "./config.js";
import { oauthLogin } from "./oauthMethods.js";

Meteor.methods({
  "getGraphQLApiUrl": () => config.API_URL,
  "oauth/login": oauthLogin
});

// Init endpoints
import "./i18n/handler.js";
import "./oauthEndpoints.js";

Meteor.startup(() => {
  Logger.info(`Serving Open Commerce Identity at ${config.ROOT_URL}`);
});
