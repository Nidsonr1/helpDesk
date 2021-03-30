import express from 'express';
import { UserController } from './Controllers/UserController';

const routes = express.Router();
const userController = new UserController();

routes.post('/users', userController.create);

export default routes;