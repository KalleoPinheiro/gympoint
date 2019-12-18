import { Router } from 'express';
import PlanController from './app/controllers/PlanController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import AuthMiddleware from './app/middlewares/AuthMiddleware';

const routes = new Router();

// NO SESSION REQUIRED
routes.post('/session', SessionController.store);

// MIDDLEWARE
routes.use(AuthMiddleware);

// GET
routes.get('/plans', PlanController.list);

// POST
routes.post('/students', StudentController.store);
routes.post('/plans', PlanController.store);

// PUT
routes.put('/students/', StudentController.update);
routes.put('/plans/:id', PlanController.update);

// DELETE
routes.delete('/plans/:id', PlanController.remove);

export default routes;
