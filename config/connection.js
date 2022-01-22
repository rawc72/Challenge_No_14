require("dotenv").config();

const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_URL);

sequelize.authenticate().then((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("MySQL database connected...");
  }
});

module.exports = sequelize;
