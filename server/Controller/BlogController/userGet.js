const User = require("../../Module/UserModule");
const userGet = async (req, res) => {
  try {
    const user = await User.findById(req.userID);
    if (!user) {
      return res.status(400).send("an error occur during the process");
    }
    res.json(user.blogs);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = userGet;
