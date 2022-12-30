import { Router } from 'express';
import { productRoute } from './product.routes';
import { userRoutes } from './user.routes';
import { orderRoute } from './order.routes';
import { categoryRoute } from './category.routes';
const routes = Router();

routes.use('/user', userRoutes);
routes.use('/products', productRoute);
routes.use('/orders', orderRoute);
routes.use('/categories', categoryRoute);

export { routes };