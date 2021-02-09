const Blog = require("../../Module/BlogModule");

const likeBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const userID = req.userID;
    const blog = await Blog.findById(id);

    if (!blog) return res.status(400).json({ msg: "the param is invalid" });
    const index = blog.like.find((i) => i === String(userID));

    if (!index) {
      blog.like.push(userID);
    } else {
      blog.like = blog.like.filter((i) => i !== String(userID));
    }

    const response = await Blog.findByIdAndUpdate(id, blog, { new: true });
    res.json(response);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
module.exports = likeBlog;
