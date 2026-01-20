import reminderEmailQueue from "../queue/queue/reminder-email-queue"

export const sendReminderEmails = async () => {
  console.log("Scheduling reminder emails...");

  const emails = ["example1@example.com", "example2@example.com"];
  const reminderEmailData = {
    to: "",
    subject: "Reminder: Check our new features!",
    body: "Hi! Just a friendly reminder to check out the new features we've added recently."
  };
  for (const email of emails) {
    reminderEmailData.to = email;
    await reminderEmailQueue.add("reminder-email", reminderEmailData);
  }
}