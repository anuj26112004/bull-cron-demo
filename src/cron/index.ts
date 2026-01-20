import schedule from "node-schedule";
import { sendReminderEmails } from "./reminder-cron";

// Schedule a job to run every day at 9 AM
schedule.scheduleJob("0 9 * * *", sendReminderEmails);