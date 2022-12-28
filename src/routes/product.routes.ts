import { Router } from 'express';
import { CreateProductController } from '../modules/products/useCases/createProduct/CreateProductController';
import { ListAllProductsController } from '../modules/products/useCases/listAllProducts/ListAllProductsController';
import { ListProductByIdController } from '../modules/products/useCases/listProductById/ListProductByIdController';

const productRoute = Router();
const createProductController = new CreateProductController();
const listAllProductsController = new ListAllProductsController();
const listProductByIdController = new ListProductByIdController();

productRoute.post('/', createProductController.handle);
productRoute.get('/', listAllProductsController.handle);
productRoute.get('/:id', listProductByIdController.handle);

export { productRoute };
