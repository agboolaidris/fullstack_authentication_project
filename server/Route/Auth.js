const Route = require("express").Router();
const Register = require("../Controller/authController/Register");
const Login = require("../Controller/authController/Login");
const Authorize = require("../Middleware/Authorize");
const Logout = require("../Controller/authController/Logout");
const Persistent = require("../Controller/authController/persistent");
const Forgetpassword = require("../Controller/authController/Forgetpassword");
const Resetpassword = require("../Controller/authController/Resetpassword");

//register Route
Route.post("/register", Register);

//Login Route
Route.post("/login", Login);

//logout Route
Route.get("/logout", [Authorize], Logout);

//persistence login Route
Route.get("/", [Authorize], Persistent);

//forgetpassword Route
Route.post("/forgetpassword", Forgetpassword);

//resetpassword Route
Route.put("/resetpassword/:id", Resetpassword);

module.exports = Route;
