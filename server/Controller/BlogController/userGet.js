const Blog = require("../../Module/BlogModule");

const userGet = async (req, res) => {
  try {
    const userID = req.userID;
    const blog = await Blog.find({ userID });
    if (!blog) {
      return res
        .status(400)
        .json({ msg: "user doesn't not have any post yet" });
    }
    res.json(blog);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = userGet;
