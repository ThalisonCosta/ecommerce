import { Router } from 'express';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { CreateUserMiddleware } from '../modules/users/useCases/createUser/CreateUserMiddleware';

const userRoutes = Router();
const createUserController = new CreateUserController();
const createUserMiddleware = new CreateUserMiddleware();

userRoutes.post('/', createUserMiddleware.validate , createUserController.handle);

export { userRoutes };
