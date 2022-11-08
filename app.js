const express = require("express"),
  cors = require("cors"),
  app = express(),
  router = require("./routes/router");
port = process.env.PORT || 3000;

// settings
app.set("port", port);
// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
if (process.env.NODE_ENV !== "production") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}
// router
app.use(router);

module.exports = app;
