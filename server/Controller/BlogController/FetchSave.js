//fetching post save by user
const Blog = require("../../Module/BlogModule");

const Fetch = async (req, res) => {
  try {
    const userID = req.userID;
    const blog = await Blog.find();
    if (!blog) res.status(400).json({ msg: "not blog posted yet" });
    const response = blog.filter((blog) =>
      blog.favourite.find((e) => e === userID)
    );
    console.log(userID);
    if (!response) res.status(400).json({ msg: "you have not save any blog" });
    res.json(response);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ msg: error.message });
  }
};

module.exports = Fetch;
