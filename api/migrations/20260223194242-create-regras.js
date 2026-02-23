'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('regras', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID,
      },
      nome: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      idFuncionalidade: {
        type: Sequelize.UUID,
        references: {
          model: 'funcionalidades',
          key: 'id'
        }
      },
      ler: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      escrever: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      deletar: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('regras');
  }
};