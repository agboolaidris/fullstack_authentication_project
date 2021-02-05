const User = require("../../Module/AuthModule");
const Blog = require("../../Module/BlogModule");
const Post = (req, res) => {
  console.log(req.userID);
  res.json({ msg: "hello" });
};
module.exports = Post;
