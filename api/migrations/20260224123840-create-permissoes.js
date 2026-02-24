'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('permissoes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID
      },
      idUsuario: {
        type: Sequelize.UUID,
        references: {
          model: 'usuarios',
          key: 'id'
        }
      },
      idRegra: {
        type: Sequelize.UUID,
        references: {
          model: 'regras',
          key: 'id'
        }
      },
      idArea: {
        type: Sequelize.UUID,
        references: {
          model: 'areas',
          key: 'id'
        }
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
    await queryInterface.dropTable('permissoes');
  }
};