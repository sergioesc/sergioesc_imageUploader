import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("home del server");
});

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`The server is running in the port ${port}`);
});
