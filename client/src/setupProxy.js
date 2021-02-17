const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/auth",
    createProxyMiddleware({
      target: "https://serverblog.herokuapp.com",
      changeOrigin: true,
    })
  );
  app.use(
    "/blog",
    createProxyMiddleware({
      target: "https://serverblog.herokuapp.com",
      changeOrigin: true,
    })
  );
  app.use(
    "/user",
    createProxyMiddleware({
      target: "https://serverblog.herokuapp.com",
      changeOrigin: true,
    })
  );
};
