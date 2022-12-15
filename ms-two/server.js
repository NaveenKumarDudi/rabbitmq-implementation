const express = require("express");

const { connectQueue } = require("./config/rabbitmq");

const app = express();

const PORT = 3030;

connectQueue();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`MS-TWO up and running at ${PORT}`);
});
