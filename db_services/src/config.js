const debug = require('debug')
require("dotenv").config();
const config = {
    database: process.env.DB_NAME || 'test_project',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'password',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: s => debug(s),
    setup: true
  }
module.exports = config;