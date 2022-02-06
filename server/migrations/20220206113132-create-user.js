'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        field: "first_name",
        allowNull: false,
        type: Sequelize.STRING(64)
      },
      lastName: {
        field: "last_name",
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      email: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      password: {
        field: "password_hash",
        allowNull: false,
        type: Sequelize.TEXT
      },
      birthday: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};