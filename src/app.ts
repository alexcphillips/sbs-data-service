import express from "express";
import { appConfig } from "./app.config";
import { apiLogger } from "./routes/middleware";
import routes from "./routes";
import logger from "./logger";

const app = express();
app.use(express.json());

app.use(apiLogger);
app.use(routes);

export const initServer = (): void => {
  app.listen(appConfig.server.port, () => logger.info(`Server listening on port: ${appConfig.server.port}`));
};
