import express from "express";
import uploadRouter from "./uploadRouter.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/upload", uploadRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/imageuploader/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/imageuploader/build/index.html"));
});
app.get("/", (req, res) => {
  res.send("home del server");
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`The server is running in the port ${port}`);
});
