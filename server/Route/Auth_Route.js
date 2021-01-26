const express = require("express");
const Route = express.Router();
const Register = require("../Controller/authController/Register");
const Login = require("../Controller/authController/Login");
const Authorize = require("../Middleware/Authorize");
const Logout = require("../Controller/authController/Logout");
const Persistent = require("../Controller/authController/persistent");
const Forgetpassword = require("../Controller/authController/Forgetpassword");
const Resetpassword = require("../Controller/authController/Resetpassword");

//register Route
Route.route("/register").post(Register);

//Login Route
Route.route("/login").post(Login);

//logout Route
Route.route("/logout").all(Authorize).get(Logout);

//persistence login Route
Route.route("/authenticated").all(Authorize).get(Persistent);

//forgetpassword Route
Route.route("/forgetpassword").post(Forgetpassword);

//resetpassword Route
Route.route("/resetpassword/:id").put(Resetpassword);

module.exports = Route;
