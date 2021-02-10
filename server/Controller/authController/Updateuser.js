const User = require("../../Module/UserModule");
const user = async (req, res) => {
  try {
    const profile = req.body;
    const { userID } = req;
    const response = await User.findByIdAndUpdate(userID, profile, {
      new: true,
    });
    if (!profile) return res.status(400).json({ msg: "error occur" });
    res.json(response);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = user;
