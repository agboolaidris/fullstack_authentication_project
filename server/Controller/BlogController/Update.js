const Blog = require("../../Module/BlogModule");
const Update = async (req, res) => {
  try {
    const { title, body, image, category } = req.body;
    const _id = req.params.id;

    if (!title || !body || !image || !category)
      return res.status(400).json({ msg: "the feild is required" });

    const response = await Blog.findByIdAndUpdate(
      _id,
      { title, body, image, category },
      { new: true }
    );

    res.json(response);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
module.exports = Update;
