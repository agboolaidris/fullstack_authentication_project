const Blog = require("../../Module/BlogModule");
const GET = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.json(blog);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = GET;
