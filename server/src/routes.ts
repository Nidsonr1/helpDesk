import express from 'express';
import { SessionController } from './Controllers/SessionController';
import { TicketController } from './Controllers/TicketController';
import { UserController } from './Controllers/UserController';

const routes = express.Router();
const userController = new UserController();
const sessionController = new SessionController();
const ticketController = new TicketController();


//Rota de Login
routes.post('/login', sessionController.create);

//Rotas de Usuários
routes.post('/users', userController.create);
routes.get('/users', userController.index);

//Rotas dos Chamados
routes.post('/ticket', ticketController.create);
routes.get('/ticket/:id', ticketController.index);
routes.get('/tickets', ticketController.show);
routes.delete('/ticket/:id', ticketController.delete);
routes.put('/ticket/:id', ticketController.update);

export default routes;