import * as path from "path";
import * as dotenv from "dotenv";
import { initServer } from "./app";
// import { connectRedis } from "./redis";

dotenv.config({ path: path.join(__dirname, ".env") });

function init() {
  initServer();
}

init();
