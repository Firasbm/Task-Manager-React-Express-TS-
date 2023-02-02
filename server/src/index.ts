import express from "express";
import path from "path";

const app = express();
const port = 3000;
const isProd = process.env.NODE_ENV === "production";

if (isProd) {
  app.use(express.static(path.resolve(__dirname, "public")));
}

app.get("/api/message", (req, res) => {
  res.send("hello");
});

app.listen(port, () => console.log(`server running at ${port}`));
