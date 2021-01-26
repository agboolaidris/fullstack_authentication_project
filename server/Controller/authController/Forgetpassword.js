const User = require("../../Module/AuthModule");

const Forgetpassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "email address does not exist" });
    }
    const param = "";

    const URL = `https://localhost:3000/forgetpassword/${123}`;
    res.json({ msg: "hello" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = Forgetpassword;
