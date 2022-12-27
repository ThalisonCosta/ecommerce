import { Router } from 'express';
import { CreateProductController } from '../modules/products/useCases/createProduct/CreateProductController';

const productRoute = Router();
const createProductController = new CreateProductController();
productRoute.post('/', createProductController.handle);

export { productRoute };
