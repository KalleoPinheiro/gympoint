import Sequelize, { Model } from 'sequelize';

class Plan extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        duration: Sequelize.STRING,
        price: Sequelize.DECIMAL(10, 2),
      },
      {
        sequelize,
        modelName: 'plan',
      }
    );
  }
}

export default Plan;
