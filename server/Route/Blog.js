const Route = require("express").Router();
const POST = require("../Controller/BlogController/Post");
const GET = require("../Controller/BlogController/Get");
const UPDATE = require("../Controller/BlogController/Update");
const Authorize = require("../Middleware/Authorize");
const DELETE = require("../Controller/BlogController/Delete");
const LikeBlog = require("../Controller/BlogController/LIkeBlog");
const SaveBlog = require("../Controller/BlogController/SaveBlog");
const EachBlog = require("../Controller/BlogController/EachBlog");
//Route
Route.post("/", [Authorize], POST);
Route.get("/", [Authorize], GET);
Route.patch("/:id", [Authorize], UPDATE);
Route.delete("/:id", [Authorize], DELETE);
Route.patch("/:id/like", [Authorize], LikeBlog);
Route.patch("/:id/save", [Authorize], SaveBlog);
Route.get("/:id", [Authorize], EachBlog);

module.exports = Route;
