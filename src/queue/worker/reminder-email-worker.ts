import { Worker } from "bullmq";

const reminderEmailWorker = new Worker(
  "reminder-email-queue",
  async job => {
    console.log(`Sending reminder email to ${job.data.to} with subject: ${job.data.subject}`);
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log(`Reminder email sent to ${job.data.to}`);
  },
  {
    connection: {
      host: "localhost",
      port: 6379
    },
    removeOnComplete: {
      count: 0
    }
  }
);

export default reminderEmailWorker;