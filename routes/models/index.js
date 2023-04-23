import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
//const { Promise } = mongoose;
//Promise = global.Promise;

import user from './user.js';
import feedback from './feedback.js';
import history from './history.js';
import tool from './tool.js';

const db = {};

db.mongoose = mongoose;
db.user = user;
db.feedback = feedback;
db.history = history;
db.tool = tool;

export default db;


