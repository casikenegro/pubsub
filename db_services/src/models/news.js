'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupNewsModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('News', {
    type: {
      type: Sequelize.ENUM('Politica','Comida','Farandula'),
      allowNull: false
    },
    value: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  })
}
