module.exports = app => {
  const Report = require("../controllers/report.controller");

  var router = require("express").Router();

  // Create a new Reports
  router.post("/", Report.create);

  // Retrieve all Report
  router.get("/", Report.findAll);

  // Retrieve all published Report
  router.get("/published", Report.findAllPublished);

  // Retrieve a single Reports with id
  router.get("/:id", Report.findOne);

  // Update a Reports with id
  router.put("/:id", Report.update);

  // Delete a Reports with id
  router.delete("/:id", Report.delete);

  // Create a new Reports
  router.delete("/", Report.deleteAll);

  app.use("/api/Report", router);
};
