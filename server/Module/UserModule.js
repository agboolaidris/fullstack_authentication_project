const mongoose = require("mongoose");
const schema = mongoose.Schema;

const new_schema = new schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  image: { type: String },
  job: { type: String },
  Lagos: { type: String },
  resetpasswordToken: { type: String },
  resetpasswordExpire: { type: Date },
});

const User = mongoose.model("User", new_schema);

module.exports = User;
