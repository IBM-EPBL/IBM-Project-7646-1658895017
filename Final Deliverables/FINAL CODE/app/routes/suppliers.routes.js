module.exports = app => {
  const Suppliers = require("../controllers/suppliers.controller");

  var router = require("express").Router();

  // Create a new Suppliers
  router.post("/", Suppliers.create);

  // Retrieve all Suppliers
  router.get("/", Suppliers.findAll);

  // Retrieve all published Suppliers
  router.get("/published", Suppliers.findAllPublished);

  // Retrieve a single Suppliers with id
  router.get("/:id", Suppliers.findOne);

  // Update a Suppliers with id
  router.put("/:id", Suppliers.update);

  // Delete a Suppliers with id
  router.delete("/:id", Suppliers.delete);

  // Create a new Suppliers
  router.delete("/", Suppliers.deleteAll);

  app.use("/api/Suppliers", router);
};
