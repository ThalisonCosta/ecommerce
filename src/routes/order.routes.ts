import { Router } from 'express';
import { createOrderController } from '../modules/orders/useCases/createOrder/CreateOrderController';
import { deleteOrderController } from '../modules/orders/useCases/deleteOrder/DeleteOrderController';
import { listOrderController } from '../modules/orders/useCases/listOrder/ListOrderController';
import { listOrderByIdController } from '../modules/orders/useCases/listOrderById/ListOrderByIdController';

const orderRoute = Router();

orderRoute.post('/', createOrderController); 
orderRoute.get('/', listOrderController);
orderRoute.get('/:id', listOrderByIdController);
orderRoute.delete('/:id', deleteOrderController);

export { orderRoute };
