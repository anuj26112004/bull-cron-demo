import express from "express";
import { sendEmail } from "./services/email-service";

const app = express();

app.post("/register", express.json(), async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send("Email is required");
  }
  await sendEmail({
    to: email,
    subject: "Welcome!",
    body: "Thank you for registering with us."
  });
  res.status(200).send("Registration successful, welcome email sent.");
});


export default app;