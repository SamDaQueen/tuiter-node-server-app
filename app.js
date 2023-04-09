import express from "express";
import cors from "cors";
import HelloController from "./controllers/hello-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/tuiter";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(express.json());
app.use(cors());

TuitsController(app);
HelloController(app);
UsersController(app);

app.listen(process.env.POST || 4000);
