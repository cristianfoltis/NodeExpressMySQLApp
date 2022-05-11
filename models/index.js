const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  'database1',
  'root',
  '', {

      // Explicitly specifying 
      // mysql database
      dialect: 'mysql',

      // By default host is 'localhost'           
      host: '127.0.0.1',
      port: 3305,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected...");
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });

  const db = {}

  db.Sequelize = Sequelize
  db.sequelize = sequelize

  db.products = require('./productModel')(sequelize, DataTypes);
  
  db.sequelize.sync( {alter: true})
  .then(() => {
      console.log('Re-sync done!');
  })

  module.exports = db;
