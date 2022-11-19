module.exports = (app) => {
  const Mail = require("../controllers/mail.controller");

  var router = require("express").Router();

  // Create a new Mail
  router.post("/contact", Mail.create);

  app.use("/api/Mail", router);
};
