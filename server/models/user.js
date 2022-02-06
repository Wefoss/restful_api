'use strict';
const {
  Model, NOW, DATEONLY, DATE
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       User.hasMany(models.Task, {
        foreignKey: 'userId',
        allowNull: false
       })
    }
  }
  User.init({
    firstName: {type: DataTypes.STRING(64), allowNull: false, field: "first_name",   validate: {
      notNull: true,
      notEmpty: true,
    }},
    lastName: {type: DataTypes.STRING(128), allowNull: false, field: "last_name",   validate: {
      notNull: true,
      notEmpty: true,
    }},
    email: {type: DataTypes.STRING(128), unique: true, allowNull: false,  validate: {
      notNull: true,
      notEmpty: true,
    }},
    password: {type: DataTypes.TEXT,  field: "password_hash"},
    birthday: {type: DataTypes.DATEONLY, allowNull: false, validate: {
      isDate: true,
      isBefore: '2022-01-01'
      
    }}
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscored: true,
      });
  return User;
};