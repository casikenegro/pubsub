const defaults = require('defaults');
const setupUserModel = require('./models/user');
const setupNewsModel = require('./models/news');

const setupDatabase = require('./lib/db');
const setupUser = require('./lib/user');
const setupNews= require('./lib/news');


module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  })
  const sequelize = setupDatabase(config);
  const NewsModel = setupNewsModel(config);
  const UserModel = setupUserModel(config);

  NewsModel.hasMany(UserModel,{
    foreignKey: {
    allowNull: true
  }});
  UserModel.belongsTo(NewsModel,{
      foreignKey: {
      allowNull: true
  }
  });

  await sequelize.authenticate();

  if (config.setup) {
    await sequelize.sync({ force: true });
  }
  const User = setupUser(UserModel);
  const News = setupNews(NewsModel);

  return {
    User,
    News
  }
}
