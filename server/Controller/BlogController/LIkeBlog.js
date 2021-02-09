const Blog = require("../../Module/BlogModule");

const likeBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) return res.status(400).json({ msg: "the param is invalid" });
    const updateblog = await Blog.findByIdAndUpdate(
      id,
      {
        like: blog.like + 1,
      },
      { new: true }
    );
    if (!updateblog)
      return res.status(400).json({ msg: "the params is invalid" });
    res.json(updateblog);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
module.exports = likeBlog;
