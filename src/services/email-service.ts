import emailQueue from "../queue/queue/email-queue";

interface EmailData {
  to: string;
  subject: string;
  body: string;
}
export const sendEmail = async (emailData: EmailData) => {
  await emailQueue.add("send-email", emailData, {
    attempts: 3,
    backoff: 5000,
  });
}