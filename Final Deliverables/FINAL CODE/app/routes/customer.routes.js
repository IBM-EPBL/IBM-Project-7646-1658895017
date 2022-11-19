module.exports = app => {
  const Customer = require("../controllers/customer.controller.js");

  var router = require("express").Router();

  // Create a new Customers
  router.post("/", Customer.create);

  // Retrieve all Customer
  router.get("/", Customer.findAll);

  // Retrieve all published Customer
  router.get("/published", Customer.findAllPublished);

  // Retrieve a single Customers with id
  router.get("/:id", Customer.findOne);

  // Update a Customers with id
  router.put("/:id", Customer.update);

  // Delete a Customers with id
  router.delete("/:id", Customer.delete);

  // Create a new Customers
  router.delete("/", Customer.deleteAll);

  app.use("/api/Customer", router);
};
