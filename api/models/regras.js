'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class regras extends Model {
    static associate(models) {
      regras.hasMany(models.permissoes, { 
        as: 'regrasPermissoes',
        foreignKey: 'idRegra' 
      });

      regras.belongsToMany(models.areas, { 
        foreignKey: 'idFuncionalidade', 
        as: 'funcionalidade', 
        through: 'areasRegras' 
      });
    }
  }
  regras.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    idFuncionalidade: { 
      type: DataTypes.UUID, 
      allowNull: false 
    },
    ler: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    escrever: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    deletar: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'regras',
  });
  return regras;
};