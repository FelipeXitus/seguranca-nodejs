'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class permissoes extends Model {
    static associate(models) {
      permissoes.belongsTo(models.usuarios, { as: 'permissoesUsuario', foreignKey: 'idUsuario' })
      permissoes.belongsTo(models.regras, { as: 'permissoesRegra', foreignKey: 'idRegra' })
    }
  }
  permissoes.init({
    idUsuario: DataTypes.UUID,
    idRegra: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'permissoes',
  });
  return permissoes;
};