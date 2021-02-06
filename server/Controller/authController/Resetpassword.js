const User = require("../../Module/UserModule");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const Resetpassword = async (req, res) => {
  try {
    const param = req.params.id;
    const { password, password2 } = req.body;

    if (!password || !password2) {
      return res.status(400).json({ msg: "the field is required" });
    }
    if (password.length < 5) {
      return res
        .status(400)
        .json({ msg: "the password length most be greater than 5" });
    }

    if (password !== password2) {
      return res.status(400).json({ msg: "the password does not match" });
    }

    const resetpasswordToken = crypto
      .createHash("sha256")
      .update(param)
      .digest("hex");

    const user = await User.findOne({
      resetpasswordToken,
      resetpasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ msg: "kindly try again later" });
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    user.password = hashPassword;
    user.resetpasswordExpire = undefined;
    user.resetpasswordToken = undefined;
    await user.save();
    return res.json({ msg: "the password was change successfully" });
  } catch (err) {
    return res.status(400).json({ msg: err.message });
  }
};

module.exports = Resetpassword;
