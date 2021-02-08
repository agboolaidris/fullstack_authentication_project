const Blog = require("../../Module/BlogModule");
const Delete = async (req, res) => {
  try {
    const _id = req.params.id;
    const blog = await Blog.findByIdAndDelete(_id);
    res.json(blog);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
module.exports = Delete;
