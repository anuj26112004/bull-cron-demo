import { Queue } from "bullmq"

const reminderEmailQueue = new Queue("reminder-email-queue", {
  connection: {
    host: "localhost",
    port: 6379
  }
});
export default reminderEmailQueue;