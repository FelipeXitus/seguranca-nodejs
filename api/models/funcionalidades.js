'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class funcionalidades extends Model {
    static associate(models) {
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