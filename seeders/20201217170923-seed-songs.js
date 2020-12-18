'use strict';
const { EMLINK } = require('constants');
const fs = require('fs')
const songs = JSON.parse(fs.readFileSync('./lagu.json', 'utf-8'))

module.exports = {
  up: (queryInterface, Sequelize) => {

    songs.forEach(element => {
      element.createdAt = new Date()
      element.updatedAt = new Date()
    });

    return queryInterface.bulkInsert("Songs", songs, {})
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
    return queryInterface.bulkDelete("Songs", null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
