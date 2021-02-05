const Route = require("express").Router();
const Post = require("../Controller/BlogController/Post");
const Authorize = require("../Middleware/Authorize");
Route.get("/", Post);
module.exports = Route;
