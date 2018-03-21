const conn = require('../config/config')
const Sequelize = require('sequelize');
const sequelize = new Sequelize(conn.database, conn.user, conn.password, {
  host: conn.host,
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  //storage: 'path/to/database.sqlite'
});

// Or you can simply use a connection uri
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

const Burger = sequelize.define('Burger', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    burger_name: {
      type: Sequelize.STRING
    },
    devoured: {
      type: Sequelize.INTEGER
    }
  },{
    timestamps: false
  });

  module.exports = Burger