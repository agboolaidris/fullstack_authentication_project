const Route = require("express").Router();
const POST = require("../Controller/BlogController/Post");
const GET = require("../Controller/BlogController/Get");
const UPDATE = require("../Controller/BlogController/Update");
const USERGET = require("../Controller/BlogController/userGet");
const Authorize = require("../Middleware/Authorize");
const DELETE = require("../Controller/BlogController/Delete");
const LikeBlog = require("../Controller/BlogController/LIkeBlog");
const Save = require("../Controller/BlogController/Save");
//Route
Route.post("/", [Authorize], POST);
Route.get("/", [Authorize], GET);
Route.patch("/:id", [Authorize], UPDATE);
Route.delete("/:id", [Authorize], DELETE);
Route.patch("/:id/user", [Authorize], LikeBlog);
Route.patch("/:id/save", [Authorize], Save);
//user fetch for is blog
Route.get("/user", [Authorize], USERGET);
module.exports = Route;
