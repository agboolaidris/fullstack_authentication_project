const User = require("../../Module/UserModule");
const Persistent = async (req, res) => {
  try {
    const user = await User.findById(req.userID);
    if (!user) {
      return res.status(401).json({ msg: "unathorized" });
    }

    return res.json({ msg: "authorized" });
  } catch (err) {
    res.status(401).json({ msg: err.message });
  }
};

module.exports = Persistent;
