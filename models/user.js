'use strict';
const hashPassword =require('../helper/hashPassword')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Song, {
        through: models.UserSong,
        foreignKey: "UserId"
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user, option){
        // console.log(user);
        user.password = hashPassword(user.password)
        console.log(user.password);
      }
    }
  });
  return User;
};