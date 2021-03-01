import { bunyan } from "@mailchimpopencommerce/logger";
import { Meteor } from "meteor/meteor";

/*
 * configure bunyan logging module for MOC client
 * See: https://github.com/trentm/node-bunyan#levels
 * client we'll configure WARN as default
 */
const levels = ["FATAL", "ERROR", "WARN", "INFO", "DEBUG", "TRACE"];

// set stdout log level
let level = Meteor.settings.public.MOC_LOG_LEVEL || "WARN";

level = level.toUpperCase();

if (!levels.includes(level)) {
  level = "WARN";
}

const Logger = bunyan.createLogger({
  name: "opencommerce-client",
  level
});

export default Logger;
