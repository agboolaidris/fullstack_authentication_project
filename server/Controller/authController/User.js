const User = require("../../Module/UserModule");
const user = async (req, res) => {
  try {
    const { userID } = req;
    const response = await User.findById(userID);
    res.json(response);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = user;
