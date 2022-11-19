module.exports = app => {
  const Employee = require("../controllers/employee.controller.js");

  var router = require("express").Router();

  // Create a new Employees
  router.post("/", Employee.create);

  // Retrieve all Employee
  router.get("/", Employee.findAll);

  // Retrieve all published Employee
  router.get("/published", Employee.findAllPublished);

  // Retrieve a single Employees with id
  router.get("/:id", Employee.findOne);

  // Update a Employees with id
  router.put("/:id", Employee.update);

  // Delete a Employees with id
  router.delete("/:id", Employee.delete);

  // Create a new Employees
  router.delete("/", Employee.deleteAll);

  app.use("/api/Employee", router);
};
