import { Worker } from "bullmq";

const emailWorker = new Worker("email-queue", async job => {

  console.log(`Sending email to ${job.data.to} with subject: ${job.data.subject}`);
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log(`Email sent to ${job.data.to}`);

}, {
  connection: {
    host: "localhost",
    port: 6379
  },
  removeOnComplete: {
    count: 0
  },
  
});

emailWorker.on("completed", job => {
  console.log(`Email job ${job.id} has been completed`);
});
emailWorker.on("failed", (job, err) => {
  console.error(`Email job ${job?.id} has failed with error: ${err.message}`);
});

export default emailWorker;