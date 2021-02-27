const User = require("../../Module/UserModule");
const SendMail = require("../../Utils/SendMail");
const crypto = require("crypto");

const Forgetpassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "email address does not exist" });
    }

    const param = crypto.randomBytes(12).toString("hex");

    user.resetpasswordToken = crypto
      .createHash("sha256")
      .update(param)
      .digest("hex");

    user.resetpasswordExpire = Date.now() + 10 * (60 * 1000);

    await user.save();

    const URL = `https://iris-blog.herokuapp.com/resetpassword/${param}`;
    const message = `<htmL>
    <h1>Password Reset</h1>
    <p>kindly click the below link to change reset your password</P>
     <a href=${URL}>${URL}</a> 
     </html>
    `;

    const sendmail = await SendMail({
      email,
      message,
      subject: "RESET PASSWORD",
    });
    console.log(sendmail);
    if (!sendmail) {
      return res.status(400).json({
        msg: "an error occur during the process, pls try again later",
      });
    }
    res.json({ msg: "email have been sent to your email addresss" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = Forgetpassword;
