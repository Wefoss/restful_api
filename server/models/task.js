'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.User, {
        foreignKey: 'userId',
        allowNull: false
      })
    }
  }
  Task.init({
    body: {type: DataTypes.TEXT, allowNull: false, validate: {
      notNull: true,
      notEmpty: true
    }},
    isDone: {type: DataTypes.BOOLEAN, allowNull: false, field: "is_done", allowNull: false, validate: {
      notNull: true,
      notEmpty: true,
    }}
  }, {
    sequelize,
    modelName: "Task",
    tableName: 'tasks',
    underscored: true
  });
  return Task;
};