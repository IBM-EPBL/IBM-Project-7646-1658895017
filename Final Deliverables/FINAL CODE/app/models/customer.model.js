const mongoose = require("mongoose");

const Customer = mongoose.model(
  "customer",
  new mongoose.Schema(
    {
      name: String,
      lastname: String,
      email: String,
      mobile: String,
      address: String,
      material: String,
      price: Number,
      qty: Number,
      discount: Number,
      total: Number,
    },
    { timestamps: true }
  )
);

module.exports = Customer;
