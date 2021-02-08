const Route = require("express").Router();
const POST = require("../Controller/BlogController/Post");
const GET = require("../Controller/BlogController/Get");
const UPDATE = require("../Controller/BlogController/Update");
const USERGET = require("../Controller/BlogController/userGet");
const Authorize = require("../Middleware/Authorize");

Route.post("/", [Authorize], POST);
Route.get("/", [Authorize], GET);
Route.patch("/:id", [Authorize], UPDATE);

//user fetch for is blog
Route.get("/user", [Authorize], USERGET);
module.exports = Route;
