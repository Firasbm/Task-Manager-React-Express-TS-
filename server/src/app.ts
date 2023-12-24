import express from "express";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./controller";

const app = express();
app.use(express.json());

dotenv.config({
  path: `.env.stage.${process.env.STAGE}`,
});

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}`,
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) =>
    console.log("Error connecting to MongoDB: ", error.message),
  );

const isProd = process.env.NODE_ENV === "production";
if (isProd) {
  app.use(express.static(path.resolve(__dirname, "public")));
}

app.use("/api/", router);

app.listen(process.env.PORT, () =>
  console.log(`server running at ${process.env.PORT}`),
);
