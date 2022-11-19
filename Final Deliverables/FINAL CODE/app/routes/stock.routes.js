module.exports = (app) => {
  const Stock = require("../controllers/stock.controller");

  var router = require("express").Router();

  // Create a new Stocks
  router.post("/", Stock.create);

  // Retrieve all Stock
  router.get("/", Stock.findAll);

  // Retrieve all published Stock
  router.get("/published", Stock.findAllPublished);

  // Retrieve a single Stocks with id
  router.get("/:id", Stock.findOne);

  // Update a Stocks with id
  router.put("/:id", Stock.update);

  // Delete a Stocks with id
  router.delete("/:id", Stock.delete);

  // Create a new Stocks
  router.delete("/", Stock.deleteAll);

  app.use("/api/Stock", router);
};
