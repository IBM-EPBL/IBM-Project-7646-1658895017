const mongoose = require("mongoose");

const Report = mongoose.model(
  "report",
  new mongoose.Schema(
    {
      ptitle: String,
      pcode: { type: String, unique: true, required: true, dropDups: true },
      pbrand: String,
      tstock: String,
      cpi: String,
      tcost: String,
      sub: String,
      ac: String,
    },
    { timestamps: true }
  )
);

module.exports = Report;
