const User = require("../../Module/UserModule");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//handle the cookie token
const signToken = async (userID) => {
  const jwt = await jwt.sign(userID.toJSON(), process.env.JWT_SECRET);
  return jwt;
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if ((!email, !password)) {
      return res.status(400).json({ msg: "the field is required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "no such an account is register" });
    }

    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) {
      return res.status(400).json({ msg: "email or password does not match" });
    }

    const access_token = await signToken(user._id);
    return res
      .cookie("access-token", access_token, {
        expires: new Date("21 july 2023"),
        secure: process.env.NODE_ENV === "production",
      })
      .json({ msg: "successful" });
  } catch (err) {
    res.status(401).json({ msg: err.message });
  }
};

module.exports = Login;
