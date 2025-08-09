import cors from "cors";
import express from "express";
import morgan from "morgan";
import { toNodeHandler, auth } from "@repo/auth-config";

import routes from "./routes";

const app: express.Express = express();

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(morgan("tiny"));

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.use("/v1", routes);

export default app;
