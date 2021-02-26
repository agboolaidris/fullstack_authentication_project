const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      //target: "https://serverblog.herokuapp.com",
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
