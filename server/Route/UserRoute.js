const express = require("express");
const Route = express.Router();
const Register = require("../Controller/authController/Register");
const Login = require("../Controller/authController/Login");
const Authorize = require("../Middleware/Authorize");
const Logout = require("../Controller/authController/Logout");
const Persistent = require("../Controller/authController/persistent");
const Forgetpassword = require("../Controller/authController/Forgetpassword");
const Resetpassword = require("../Controller/authController/Resetpassword");
const GetUser = require("../Controller/authController/User");
const UpdateUser = require("../Controller/authController/Updateuser");

//register Route
Route.post("/register", Register);

//Login Route
Route.post("/login", Login);

//logout Route
Route.get("/logout", [Authorize], Logout);

//persistence login Route
Route.get("/authenticated", [Authorize], Persistent);

//forgetpassword Route
Route.post("/forgetpassword", Forgetpassword);

//resetpassword Route
Route.put("/resetpassword/:id", Resetpassword);

//Fetch userProfile
Route.get("/", [Authorize], GetUser);
//Post userProfile

Route.patch("/", [Authorize], UpdateUser);
module.exports = Route;
