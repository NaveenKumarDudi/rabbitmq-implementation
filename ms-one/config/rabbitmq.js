const amqp = require("amqplib");

var channel, connection;

async function connectQueue() {
  try {
    connection = await amqp.connect(
      "amqp://naveen:naveendudi@localhost:5672/cherry_broker"
    );
    channel = await connection.createChannel();
    await channel.assertQueue("test-queue");
  } catch (error) {
    console.log(error);
  }
}

async function sendDataToQueue(data) {
  await channel.sendToQueue("test-queue", Buffer.from(JSON.stringify(data)));
}

module.exports = {
  connectQueue,
  channel,
  connection,
  sendDataToQueue,
};
