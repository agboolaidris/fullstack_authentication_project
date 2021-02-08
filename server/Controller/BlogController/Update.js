const Blog = require("../../Module/BlogModule");
const Update = async (req, res) => {
  try {
    const userID = req.userID;
    const { title, body, image, category } = req.body;
    const _id = req.params.id;
    const blog = { title, body, image, category, _id, userID };
    if (!title || !body || !image || !category)
      return res.status(400).json({ msg: "the feild is required" });
    const response = await Blog.findByIdAndUpdate(_id, blog, { new: true });
    res.json(response);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
module.exports = Update;
