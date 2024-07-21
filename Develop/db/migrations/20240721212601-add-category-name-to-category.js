'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // We don't actually run this because we've already made the change manually
    // But it documents what we did
    // await queryInterface.addColumn('category', 'category_name', {
    //   type: Sequelize.STRING(255),
    //   allowNull: false
    // });
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeColumn('category', 'category_name');
  }
};
