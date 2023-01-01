import { Router } from 'express';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { CreateUserMiddleware } from '../modules/users/useCases/createUser/CreateUserMiddleware';
import { UserLoginController } from '../modules/users/useCases/userLogin/UserLoginController';
import { UserLoginMiddleware } from '../modules/users/useCases/userLogin/UserLoginMiddleware';

const userRoutes = Router();
const createUserController = new CreateUserController();
const createUserMiddleware = new CreateUserMiddleware();
const userLoginController = new UserLoginController();
const userLoginMiddleware = new UserLoginMiddleware();

userRoutes.post('/create', createUserMiddleware.validate, createUserController.handle);
userRoutes.post('/login', userLoginMiddleware.validate,userLoginController.handle);

export { userRoutes };
