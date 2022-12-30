import { Router } from 'express';
import { CreateOrderController } from '../modules/orders/useCases/createOrder/CreateOrderController';
import { DeleteOrderController } from '../modules/orders/useCases/deleteOrder/DeleteOrderController';
import { ListOrderController } from '../modules/orders/useCases/listOrder/ListOrderController';
import { ListOrderByIdController } from '../modules/orders/useCases/listOrderById/ListOrderByIdController';

const orderRoute = Router();
const createOrderController = new CreateOrderController();
const listOrderController = new ListOrderController();
const listOrderByIdController = new ListOrderByIdController();
const deleteOrderController = new DeleteOrderController();

orderRoute.post('/', createOrderController.handle); 
orderRoute.get('/', listOrderController.handle);
orderRoute.get('/:id', listOrderByIdController.handle);
orderRoute.delete('/:id', deleteOrderController.handle);

export { orderRoute };
