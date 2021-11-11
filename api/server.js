const express = require("express");
const server = express();

const hobbitsRouter = require("./hobbits/hobbits-router");

server.use(express.json());

server.use("/api/hobbits", hobbitsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "sanity check" });
});

server.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
