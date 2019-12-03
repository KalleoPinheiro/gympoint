import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Student from '../app/models/StudentModel';

const models = [Student];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig.development);
    models.map(model => model.init(this.connection));
  }
}
export default new Database();
