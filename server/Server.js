const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieparser = require("cookie-parser");
require("dotenv").config();

//init mongoose
mongoose.connect("mongodb://localhost:27017/authentication", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once("open", () => {
    console.log("connected successful...........");
  })
  .on("error", () => {
    console.log("error occur during the connection to database");
  });

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
app.use("/user", require("./Route/Auth_Route"));
app.use("/blog", require("./Route/Blog_Route"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
