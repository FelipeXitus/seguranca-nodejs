'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class funcionalidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  funcionalidades.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'funcionalidades',
  });
  return funcionalidades;
};