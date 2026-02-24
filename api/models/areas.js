'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class areas extends Model {
    static associate(models) {
      models.areas.hasMany(models.permissoes, { foreignKey: 'idArea' })
    }
  }
  areas.init({
    nome: DataTypes.STRING,
    path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'areas',
  });
  return areas;
};