const mongoose = require("mongoose");

const Stock = mongoose.model(
  "stock",
  new mongoose.Schema(
    {
      ptitle: String,
      pcode: String,
      tstock: String,
      cpi: String,
      tcost: String,
      ac: String,
    },
    { timestamps: true }
  )
);

module.exports = Stock;
