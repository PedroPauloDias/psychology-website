
import   nodemailer from "nodemailer"



export const transporter = nodemailer.createTransport({

  service: "gmail",
  auth: {
    user:  "pedroppld@gmail.com" ,
    pass:" dsplwvldjngwkqzo "
  },

});
export const mailOptions = {
    from: " pedroppld@gmail.com ",
    to:  "pedroppld@gmail.com "
  };


