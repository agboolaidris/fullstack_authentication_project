const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  const id = jwt.verify(token, process.env.JWT_SECRET);
  return id;
};

const Authorize = (req, res, next) => {
  const token = req.cookies["access-token"];
  if (!token) {
    return res.status(400).send("unathorize");
  }
  const id = verifyToken(token);
  if (!id) {
    return res.status({ msg: "error occur during the process" });
  }
  req.userID = id;
  next();
};

module.exports = Authorize;
