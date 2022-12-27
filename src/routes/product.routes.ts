import { Router } from 'express';
import { CreateProductController } from '../modules/products/useCases/createProduct/CreateProductController';
import { ListProductsController } from '../modules/products/useCases/listProducts/ListProductsController';

const productRoute = Router();
const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();

productRoute.post('/', createProductController.handle);
productRoute.get('/', listProductsController.handle);

export { productRoute };
