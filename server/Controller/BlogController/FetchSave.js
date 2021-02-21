//fetching post save by user
const Blog = require("../../Module/BlogModule");

const Fetch = async (req, res) => {
  try {
    const userID = req.userID;
    const blog = await Blog.find();
    if (!blog) return res.status(400).json({ msg: "not blog posted yet" });

    const response = blog.filter((blog) =>
      blog.favourite.find((e) => e === String(userID))
    );

    if (!response)
      return res.status(400).json({ msg: "you have not save any blog" });
    res.json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = Fetch;
