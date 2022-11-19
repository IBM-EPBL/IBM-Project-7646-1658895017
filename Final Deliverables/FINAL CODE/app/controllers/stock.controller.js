const db = require("../models");
const Report = db.report;
const Stock = db.stock;

// Create and Save a new Stock
exports.create = (req, res) => {
  // Validate request
  if (!req.body.pcode) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Stock
  const stock = new Stock({
    pcode: req.body.pcode,
    ptitle: req.body.ptitle,
    tstock: req.body.tstock,
    ac: req.body.ac,
    cpi: req.body.cpi,
    tcost: req.body.tcost,
  });

  // Update a Report
  const report = {
    tstock: req.body.tstock,
    ac: req.body.ac,
    cpi: req.body.cpi,
    tcost: req.body.tcost,
  };

  Report.findByIdAndUpdate(req.body.pid, report)
    .then((data) => {})
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while Update the Report.",
      });
    });

  // Save Stock in the database
  stock
    .save(stock)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Stock.",
      });
    });
};

// Retrieve all Reports from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Stock.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving stock.",
      });
    });
};

// Find a single Stock with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Stock.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Stock with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Stock with id=" + id });
    });
};

// Update a Stock by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  // Update a Report
  const report = {
    tstock: req.body.tstock,
    ac: req.body.ac,
    cpi: req.body.cpi,
    tcost: req.body.tcost,
  };

  Report.findByIdAndUpdate(req.body.pid, report)
    .then((data) => {})
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while Update the Report.",
      });
    });
    
  const id = req.params.id;

  Stock.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Stock with id=${id}. Maybe Stock was not found!`,
        });
      } else res.send({ message: "Stock was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Stock with id=" + id,
      });
    });
};

// Delete a Stock with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Stock.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Stock with id=${id}. Maybe Stock was not found!`,
        });
      } else {
        res.send({
          message: "Stock was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Stock with id=" + id,
      });
    });
};

// Delete all Reports from the database.
exports.deleteAll = (req, res) => {
  Stock.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Reports were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all stock.",
      });
    });
};

// Find all published Reports
exports.findAllPublished = (req, res) => {
  Stock.find({ published: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving stock.",
      });
    });
};
