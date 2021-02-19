const mongose = require("mongoose");
const schema = mongose.Schema;

const blogSchema = new schema({
  userID: { required: true, type: String },
  title: { required: true, type: String },
  body: { required: true, type: String },
  image: { type: String, required: true },
  like: { default: [], type: [String] },
  favourite: { default: [], type: [String] },
  category: { type: String, required: true },
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const Blog = mongose.model("Blog", blogSchema);
module.exports = Blog;
