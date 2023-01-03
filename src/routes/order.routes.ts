import { Router } from 'express';
import { createOrderController } from '../modules/orders/useCases/createOrder/CreateOrderController';
import { deleteOrderController } from '../modules/orders/useCases/deleteOrder/DeleteOrderController';
import { listOrderController } from '../modules/orders/useCases/listOrder/ListOrderController';
import { listOrderByIdController } from '../modules/orders/useCases/listOrderById/ListOrderByIdController';
import { validateJWT } from '../modules/users/useCases/userLogin/UserLoginMiddleware';

const orderRoute = Router();

orderRoute.post('/', validateJWT, createOrderController); 
orderRoute.get('/', validateJWT, listOrderController);
orderRoute.get('/:id', validateJWT, listOrderByIdController);
orderRoute.delete('/:id', validateJWT,  deleteOrderController);

export { orderRoute };
