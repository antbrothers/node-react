var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var config = require('../config/config');

const basename = path.basename(module.filename);
const db = {};
const dbConfig = config.db;

let sequelize;

try {
    sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, dbConfig);
    console.log("connection to the db....")
} catch (e) {
    console.log(e);
    throw e;
}

fs.readdirSync(__dirname).filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach((file) => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
})

Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
})
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync();

module.exports = db;