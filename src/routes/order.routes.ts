import { Router } from 'express';
import { CreateOrderController } from '../modules/orders/useCases/createOrder/CreateOrderController';
import { ListOrderController } from '../modules/orders/useCases/listOrder/ListOrderController';

const orderRoute = Router();
const createOrderController = new CreateOrderController();
const listOrderController = new ListOrderController();

orderRoute.post('/', createOrderController.handle); 
orderRoute.get('/', listOrderController.handle);

export { orderRoute };
