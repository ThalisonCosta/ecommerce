import { Router } from 'express';
import { productRoute } from './product.routes';
import { userRoutes } from './user.routes';
import { orderRoute } from './order.routes';
const routes = Router();

routes.use('/user', userRoutes);
routes.use('/products', productRoute);
routes.use('/orders', orderRoute);

export { routes };