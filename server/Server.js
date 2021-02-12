const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieparser = require("cookie-parser");
require("dotenv").config();

//init mongoose
mongoose.connect(
  process.env.MONGODB_SECRET,
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
app.set("trust proxy", 1);
//cokieparser
app.use(cookieparser());
//body parser
app.use(express.json({ limit: "30mb", extended: false }));
app.use(express.urlencoded({ extended: false }));

//cross origin resource sharing
app.use(
  cors({
    origin: ["https://iris-blog.herokuapp.com", "https://localhost:3000"],
    credentials: true,
    exposedHeaders: ["access-token"],
  })
);

//router
app.use("/auth", require("./Route/Auth"));
app.use("/blog", require("./Route/Blog"));
app.use("/user", require("./Route/User"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
