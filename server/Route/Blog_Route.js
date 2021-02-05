const Route = require("express").Router();
const POST = require("../Controller/BlogController/Post");
const GET = require("../Controller/BlogController/Get");
const Authorize = require("../Middleware/Authorize");

Route.post("/", [Authorize], POST);
Route.get("/", [Authorize], GET);
module.exports = Route;
