import { Router } from 'express';
import { productRoute } from './product.routes';
import { userRoutes } from './user.routes';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/products', productRoute);

export { routes };