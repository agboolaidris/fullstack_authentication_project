const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieparser = require("cookie-parser");
require("dotenv").config();
const DEV = "mongodb://localhost:27017/authentication";

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

//cross origin resource sharing
app.use(
  cors({
    origin: "https://localhost:3000",
    credentials: true,
    exposedHeaders: ["access-token"],
  })
);

//cokieparser
app.use(cookieparser());

//body parser
app.use(express.json({ limit: "30mb", extended: false }));
app.use(express.urlencoded({ extended: false }));

//router
app.use("/user", require("./Route/UserRoute"));
app.use("/blog", require("./Route/BlogRoute"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
