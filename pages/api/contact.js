import { mailOptions, transporter } from "../../nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data)


  try {
    await transporter.sendMail({
      ...mailOptions,
      name: data.name,
      text: "this is a test string",
      html: "<h1> TESTANDO </h1> <p>algum texto</p>",
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
    }
  }
};
export default handler;
