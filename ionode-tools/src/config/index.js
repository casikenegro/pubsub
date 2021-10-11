'use strict'

require('dotenv').config()

const config = {
  dev: process.env.NODE_ENV !== 'production',
  apiPort: process.env.API_PORT || 3001,
  clientPort: process.env.CLIENT_PORT || 8080,
  auth: {
    secret: process.env.SECRET
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT,
    database: process.env.DB_NAME || 'test_project',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Password+123',
    dialect: process.env.DB_DIALECT || 'mysql'
  }
}

module.exports = config
