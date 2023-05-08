const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Todo = sequelize.define("todo",{
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true
            },
            eventName: {
              type: DataTypes.STRING,
            },
            discription: {
              type: DataTypes.STRING,
            },
            date: {
                type: DataTypes.STRING
            }
          },
    );
  
    return Todo;
  };