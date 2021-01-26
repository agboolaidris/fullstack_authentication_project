const nodemailer = require("nodemailer");
const { options } = require("../Route/Auth_Route");

const SendMail = (options) => {
  const Tranporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.email,
    subject: options.subject,
    html: options.message,
  };

  Tranporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("mail sent!!!!!!!!!");
    }
  });
};

module.exports = SendMail;
