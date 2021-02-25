const Blog = require("../../Module/BlogModule");
const User = require("../../Module/UserModule");
const Index = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const blog = await Blog.findById(id);
    if (!blog) return res.status(400).json({ msg: "the param is required" });
    console.log(blog);
    const user = await User.findById(blog.userID);
    if (!user)
      return res
        .status(400)
        .json({ msg: "the user with this blog is not exist" });
    res.json({
      body: blog.body,
      title: blog.title,

      username: user.username,
      ...blog,
      email: user.email,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = Index;
