'use strict';

const base64 = require('base-64');
const { users } = require('../models/index.js');

module.exports = async (req, res, next) => {

  // if (!req.headers.authorization) { return _authError(); }
  if (!req.headers.authorization) { return next('No Auth Sent'); }

  let basic = req.headers.authorization.split(' ')[1];
  let [username, pass] = await base64.decode(basic).split(':');

  try {
    req.user = await users.authenticateBasic(username, pass);
    next();
  } catch (e) {
    res.status(403).send('Invalid Login');
  }
};

