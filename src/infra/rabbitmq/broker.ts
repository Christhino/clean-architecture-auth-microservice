import * as amqp from 'amqplib';

const publishEvent = async (eventName: string, eventData: any): Promise<void> => {
  try {
    const MESSAGE_BROKER_URL = 'amqp://rabbitmq:rabbitmq@localhost:5672/'
    const connection = await amqp.connect(MESSAGE_BROKER_URL);
    const channel = await connection.createChannel();
    const queue = 'authentication-events';

    await channel.assertQueue(queue, { durable: false });

    channel.sendToQueue(queue, Buffer.from(JSON.stringify({ name: eventName, data: eventData })));
    
    console.log(`Event "${eventName}" published successfully.`);
    
    await channel.close();
    await connection.close();
  } catch (error) {
    console.error('Error publishing event to RabbitMQ:', error.message);
  }
};

export { publishEvent };