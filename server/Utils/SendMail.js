const nodemailer = require("nodemailer");
const nodemailerMailgun = require("nodemailer-mailgun-transport");

const SendMail = (options) => {
  const Auth = {
    auth: {
      api_key: process.env.MAILGUN_APIKEY,
      domain: process.env.MAILGUN_DOMAIN,
    },
  };
  const Tranporter = nodemailer.createTransport(nodemailerMailgun(Auth));

  const mailOptions = {
    from: "Excited User <me@samples.mailgun.org>",
    to: options.email,
    subject: options.subject,
    html: options.message,
  };

  let response = Tranporter.sendMail(mailOptions);
  console.log(response);
  return response;
};

module.exports = SendMail;
