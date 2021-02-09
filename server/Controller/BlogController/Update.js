const Blog = require("../../Module/BlogModule");
const Update = async (req, res) => {
  try {
    const { title, body, image, category } = req.body;
    const { id } = req.params;

    if (!title || !body || !image || !category)
      return res.status(400).json({ msg: "the feild is required" });

    const response = await Blog.findByIdAndUpdate(
      id,
      { title, body, image, category },
      { new: true }
    );
    if (!response)
      return res.status(400).json({ msg: "the params is incorrect" });
    res.json(response);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
module.exports = Update;
