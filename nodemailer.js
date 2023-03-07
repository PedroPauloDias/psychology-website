
import nodemailer from "nodemailer";

const email = process.env.EMAIL_NODEMAILER;
const pass = process.env.EMAIL_PASS_NODEMAILER;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass:pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};