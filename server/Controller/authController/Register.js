const User = require("../../Module/AuthModule");
const bcrypt = require("bcryptjs");

const Register = async (req, res, next) => {
  try {
    const { username, email, password, password2 } = req.body;

    if (!email || !password || !username || !password2) {
      return res.status(400).json({ msg: "the field is required" });
    }

    const user_Email = await User.findOne({ email });
    if (user_Email) {
      return res
        .status(400)
        .json({ msg: "account with this email address has been register" });
    }

    const user_Username = await User.findOne({ username });
    if (user_Username) {
      return res.status(400).json({ msg: "username have already exist" });
    }

    if (password.length < 6) {
      return res.status(400).json({ msg: "password most be greater than six" });
    }

    if (password !== password2) {
      return res.status(400).json({ msg: "password doesnot match" });
    }

    const salt = await bcrypt.genSalt();
    const genpassword = await bcrypt.hash(password, salt);

    const user = new User({
      email: email,
      password: genpassword,
      username: username,
    });

    await user
      .save()
      .then((response) => {
        const data = {
          id: response._id,
          username: response.username,
          email: response.email,
        };
        return res.json({ msg: data });
      })
      .catch((err) => {
        return res.status(400).json({ msg: err });
      });

    next();
  } catch (err) {
    return res.status(400).json({ msg: err.message });
  }
};

module.exports = Register;
