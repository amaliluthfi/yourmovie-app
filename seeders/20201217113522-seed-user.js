'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    const user = [
      {
      name: "dummy",
      username: "dummyuser",
      password: "oploverz123",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]
    return queryInterface.bulkInsert("Users", user, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
