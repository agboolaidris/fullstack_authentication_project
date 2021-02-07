const Blog = require("../../Module/BlogModule");
const Post = async (req, res) => {
  try {
    const userID = req.userID;
    const { title, body, image, category } = req.body;
    if ((!title, !body, !image, !category)) {
      return res.status(400).json({ msg: "the filed most be required" });
    }
    const blog = new Blog({
      title,
      body,
      image,
      category,
      userID,
    });
    const response = await blog.save();
    if (!response) {
      return json(500).status({ msg: "error occur" });
    }
    res.json(response);
  } catch (err) {
    res.status(400).json({ msg: "error occur" });
  }
};
module.exports = Post;
