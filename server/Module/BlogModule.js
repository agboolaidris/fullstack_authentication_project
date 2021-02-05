const moongose = require("mongoose");
const schema = moongose.Schema;

const Blog = new schema({
  user: { required: true, type: String },
  title: { required: true, type: String },
  body: { required: true, type: String },
  image: { type: String, required: true },
  like: { default: 0, type: Number },
  tags: [],
  createAt: {
    type: Date,
    default: new Date(),
  },
});
