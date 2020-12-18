'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Song.belongsTo(models.Artist)
      Song.belongsToMany(models.User, {
        through: models.UserSong,
        foreignKey: "SongId"
      })
    }
  };
  Song.init({
    name: DataTypes.STRING,
    urlImg: DataTypes.STRING,
    urlSong: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};