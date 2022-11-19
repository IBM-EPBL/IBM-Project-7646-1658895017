const mongoose = require("mongoose");

const Suppliers = mongoose.model(
  "suppliers",
  new mongoose.Schema(
    {
      name: String,
      mobile: String,
      payment: String,
      materials: String,
      address: String,
    },
    { timestamps: true }
  )
);

module.exports = Suppliers;
