"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("revieweds", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      moviesId: {
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      duration: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.STRING,
      },
      genre: {
        type: Sequelize.STRING,
      },
      casting: {
        type: Sequelize.STRING,
      },
      overview: {
        type: Sequelize.STRING,
      },
      rating: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("revieweds");
  },
};
