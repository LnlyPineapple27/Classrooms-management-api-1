'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SID extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SID.init({
    SID: DataTypes.STRING,
    classroomID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'SID',
  });
  return SID;
};