"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishEvent = void 0;
const amqp = __importStar(require("amqplib"));
const publishEvent = async (eventName, eventData) => {
    try {
        const MESSAGE_BROKER_URL = 'amqp://rabbitmq:rabbitmq@localhost:5672/';
        const connection = await amqp.connect(MESSAGE_BROKER_URL);
        const channel = await connection.createChannel();
        const queue = 'authentication-events';
        await channel.assertQueue(queue, { durable: false });
        channel.sendToQueue(queue, Buffer.from(JSON.stringify({ name: eventName, data: eventData })));
        console.log(`Event "${eventName}" published successfully.`);
        await channel.close();
        await connection.close();
    }
    catch (error) {
        console.error('Error publishing event to RabbitMQ:', error.message);
    }
};
exports.publishEvent = publishEvent;
//# sourceMappingURL=broker.js.map