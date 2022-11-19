const db = require("../models");
const Suppliers = db.suppliers;

// Create and Save a new Suppliers
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Suppliers
  const suppliers = new Suppliers({
    name: req.body.name,
    mobile: req.body.mobile,
    payment: req.body.payment,
    materials: req.body.materials,
    address: req.body.address,
  });

  // Save Suppliers in the database
  suppliers
    .save(suppliers)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Suppliers.",
      });
    });
};

// Retrieve all Supplierss from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Suppliers.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving suppliers.",
      });
    });
};

// Find a single Suppliers with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Suppliers.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Suppliers with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Suppliers with id=" + id });
    });
};

// Update a Suppliers by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Suppliers.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Suppliers with id=${id}. Maybe Suppliers was not found!`,
        });
      } else res.send({ message: "Suppliers was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Suppliers with id=" + id,
      });
    });
};

// Delete a Suppliers with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Suppliers.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Suppliers with id=${id}. Maybe Suppliers was not found!`,
        });
      } else {
        res.send({
          message: "Suppliers was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Suppliers with id=" + id,
      });
    });
};

// Delete all Supplierss from the database.
exports.deleteAll = (req, res) => {
  Suppliers.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Supplierss were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all suppliers.",
      });
    });
};

// Find all published Supplierss
exports.findAllPublished = (req, res) => {
  Suppliers.find({ published: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving suppliers.",
      });
    });
};
