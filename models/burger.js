var Sequelize = require("sequelize");

var sequelizeConnection = require("../config/connection.js");

var Devour = sequelizeConnection.define("devour", {
  name: {
    type: Sequelize.STRING
  },
  devour: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }

});

Devour.sync();

module.exports = Devour;
