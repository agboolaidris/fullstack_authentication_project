const Route = require("express").Router();
const GetUser = require("../Controller/User/User");
const UpdateUser = require("../Controller/User/Updateuser");
const Authorize = require("../Middleware/Authorize");

//Fetch userProfile
Route.get("/", [Authorize], GetUser);

//Post userProfile
Route.patch("/", [Authorize], UpdateUser);

module.exports = Route;
