'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Songs", "ArtistId", {
      type: Sequelize.INTEGER,
      references: {
        model: {tableName: "Artists"},
        key: "id"
      },
      onDelete: "CASCADE",
      onUpdated: "CASCADE"
    })

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Songs", "ArtistId", {})
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
