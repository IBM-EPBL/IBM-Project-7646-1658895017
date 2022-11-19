const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js");
db.employee = require("./employee.model.js");
db.customer = require("./customer.model.js");
db.report = require("./report.model.js");
db.stock = require("./stock.model.js");
db.suppliers = require("./suppliers.model.js");

db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
