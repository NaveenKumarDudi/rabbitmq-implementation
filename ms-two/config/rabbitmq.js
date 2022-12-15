const amqp = require("amqplib");

var channel, connection;

async function connectQueue() {
  try {
    connection = await amqp.connect(
      "amqp://naveen:naveendudi@localhost:5672/cherry_broker"
    );
    channel = await connection.createChannel();
    await channel.assertQueue("test-queue");

    channel.consume("test-queue", (data) => {
      console.log(data);
      console.log(JSON.parse(data.content));
      channel.ack(data);
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  connectQueue,
  channel,
  connection,
};
