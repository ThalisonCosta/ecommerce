import { Router } from 'express';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { CreateUserMiddleware } from '../modules/users/useCases/createUser/CreateUserMiddleware';
import { UserLoginController } from '../modules/users/useCases/userLogin/UserLoginController';

const userRoutes = Router();
const createUserController = new CreateUserController();
const createUserMiddleware = new CreateUserMiddleware();
const userLoginController = new UserLoginController();

userRoutes.post('/create', createUserMiddleware.validate , createUserController.handle);
userRoutes.post('/login', userLoginController.handle);

export { userRoutes };
