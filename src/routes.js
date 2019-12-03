import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import AuthMiddleware from './app/middlewares/AuthMiddleware';

const routes = new Router();

routes.post('/session', SessionController.store);

routes.use(AuthMiddleware);
routes.post('/students', StudentController.store);
routes.put('/students', StudentController.update);

export default routes;
