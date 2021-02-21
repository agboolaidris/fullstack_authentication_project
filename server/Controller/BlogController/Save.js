//save blog for future read
const Blog = require("../../Module/BlogModule");
const SaveBlog = async (req, res) => {
  try {
    const userID = req.userID;
    const _id = req.params.id;

    if (!_id) {
      return res.status(400).json({ msg: "params is required" });
    }

    const blog = await Blog.findById(_id);
    if (!blog) {
      return res.status(400).json({ msg: "params is invalid" });
    }

    if (blog.userID === String(userID)) {
      return res.status(400).json({ msg: "you can not save your blog" });
    }

    const Find = blog.favourite.find((e) => e === String(userID));

    if (Find) {
      return res.status(400).json({ msg: "you have already save the post" });
    }
    blog.favourite.push(userID);
    const response = await blog.save();
    if (!response) {
      return res.status(500).json({ msg: "server error" });
    }

    res.json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
module.exports = SaveBlog;
