const express = require("express");

const { connectQueue, sendDataToQueue } = require("./config/rabbitmq");

const app = express();

const PORT = 3020;

connectQueue();

app.use(express.json());

app.get("/send", async (req, res) => {
  const data = {
    user: "Random",
    login: Math.random(0, 10),
  };
  sendDataToQueue(data);
  res.send("Message sent").end();
});

app.listen(PORT, () => {
  console.log(`MS-ONE up and running at ${PORT}`);
});
