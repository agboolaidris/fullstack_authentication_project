const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieparser = require("cookie-parser");
require("dotenv").config();

//init mongoose
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected successful...........");
  }
);

// init express
const app = express();

//cross origin resource sharing
app.use(
  cors({
    origin: ["iris-blog.herokuapp.com", "https://localhost:3000"],
    credentials: true,
    exposedHeaders: ["access-token"],
  })
);

//body parser
app.use(express.json({ limit: "30mb", extended: false }));
app.use(express.urlencoded({ extended: false }));

//cokieparser
app.use(cookieparser());

//router
app.use("/api/auth", require("./Route/Auth"));
app.use("/api/blog", require("./Route/Blog"));
app.use("/api/user", require("./Route/User"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
