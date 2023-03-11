
import   nodemailer from "nodemailer"



export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_LOGIN_EMAIL,
    pass:process.env.NEXT_PUBLIC_PASS_MAIL,
  },
});

export const mailOptions = {
  from:process.env.NEXT_PUBLIC_LOGIN_EMAIL,
  to: process.env.NEXT_PUBLIC_LOGIN_EMAIL
};
