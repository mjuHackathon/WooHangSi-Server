const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || 'awsrds';
const config = require('../config/aws_rds_config.json')[env];
const db = {};

const sequelize = new Sequelize(config.dbName, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

db.sequelize = sequelize;

module.exports = db;