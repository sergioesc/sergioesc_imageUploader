import express from "express";
import uploadRouter from "./uploadRouter.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("home del server");
});
app.use("/api/upload", uploadRouter);

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`The server is running in the port ${port}`);
});
