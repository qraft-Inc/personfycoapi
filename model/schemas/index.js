import mongoose, { Promise } from 'mongoose';
Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.user = require("./user").default;
db.feedback = require("./feedback").default;
db.history = require("./history").default;
db.tool = require("./tool").default;

export default db;