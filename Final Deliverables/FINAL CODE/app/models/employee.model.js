const mongoose = require("mongoose");

const Employee = mongoose.model(
  "employee",
  new mongoose.Schema(
    {
      name: String,
      mobile: String,
      email: String,
      address: String,
      dob: String,
    },
    { timestamps: true }
  )
);

module.exports = Employee;
