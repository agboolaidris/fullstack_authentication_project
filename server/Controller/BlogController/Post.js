const User = require("../../Module/AuthModule");
const Blog = require("../../Module/BlogModule");
const Post = async (req, res) => {
  try {
    const userID = req.userID;
    const user = await User.findById(userID);
    if (!user) {
      return res.status(400).json({ msg: "error occur" });
    }
    //req sent by the client
    const { title, body, image, category } = req.body;
    if ((!title, !body, !image, !category)) {
      return res.status(400).json({ msg: "the filed most be required" });
    }
    const blog = new Blog({
      title,
      body,
      image,
      category,
      user: user.username,
    });
    await blog.save();
    Blog.find()
      .then((response) => {
        res.json({ msg: response });
      })
      .then((err) => {
        res.status(500).json({ msg: err });
      });
  } catch (err) {
    res.status(400).json({ msg: "error occur" });
  }
};
module.exports = Post;
