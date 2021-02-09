const Blog = require("../../Module/BlogModule");

const likeBlog = async (req, res) => {
  try {
    const { _id } = req.params.id;
    const blog = await Blog.findById(_id);
    const updateblog = await Blog.findByIdAndUpdate(
      _id,
      {
        like: blog.like + 1,
      },
      { new: true }
    );
    res.json(updateblog);
  } catch (err) {
    res.status(400).json({ msg: err.message });
    console.log(err);
  }
};
module.exports = likeBlog;
