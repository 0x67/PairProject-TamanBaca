'use strict';
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
         User.hasMany(models.BookUser, {
            foreignKey: 'UserId'
         })
      }
   };
   User.init({
      username: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
            notEmpty: {
               args: true,
               msg: "Username is required!"
            },
            is: {
               args: /^[a-zA-Z0-9-]+$/,
               msg: "Username must contain only a combination of alphabets, numbers, and dashes!"
            },
         }
      },
      password: DataTypes.STRING,
      role: DataTypes.STRING
   }, {
      sequelize,
      modelName: 'User',
   });
   return User;
};