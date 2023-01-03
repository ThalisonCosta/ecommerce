import { Router } from 'express';
import { createUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { createUserMiddleware } from '../modules/users/useCases/createUser/CreateUserMiddleware';
import { refreshToken } from '../modules/users/useCases/refreshToken/refreshTokenController';
import { userLoginController } from '../modules/users/useCases/userLogin/UserLoginController';
import { userLoginMiddleware } from '../modules/users/useCases/userLogin/UserLoginMiddleware';

const userRoutes = Router();

userRoutes.post('/create', createUserMiddleware, createUserController);
userRoutes.post('/login', userLoginMiddleware, userLoginController);
userRoutes.post('/refreshToken', refreshToken);

export { userRoutes };
