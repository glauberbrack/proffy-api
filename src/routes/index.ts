import express from 'express';
import ClassesController from '../controllers/ClassesController';
import ConnectionsController from '../controllers/ConnectionsController';

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

// CLASSES
routes.get('/classes', classesController.index);
routes.post('/classes', classesController.store);

// CONNECTIONS
routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.store);

export default routes;