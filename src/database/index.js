import { Sequelize } from 'sequelize';
import Plan from '../app/models/PlanModel';
import Student from '../app/models/StudentModel';
import User from '../app/models/UserModel';
import databaseConfig from '../config/database';

const models = [User, Student, Plan];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}
export default new Database();
