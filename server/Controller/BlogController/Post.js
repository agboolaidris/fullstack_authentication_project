const User = require("../../Module/UserModule");
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
    const response = await blog.save();
    if (!response) {
      return json(500).status({ msg: "error occur" });
    }
    user.blogs.push(response);
    await user.save();
    res.json(response);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ msg: "error occur" });
  }
};
module.exports = Post;
