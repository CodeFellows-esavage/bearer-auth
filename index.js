'use strict';
require('dotenv').config();
const { db } = require('./src/auth/models/index.js');
const { start } = require('./src/server');
const PORT = process.env.PORT || 3000;

// Start up DB Server
db.sync()
  .then(() => start(PORT))
  .catch(err => console.log(err));

