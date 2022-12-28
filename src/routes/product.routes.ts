import { Router } from 'express';
import { CreateProductController } from '../modules/products/useCases/createProduct/CreateProductController';
import { DeleteProductController } from '../modules/products/useCases/deleteProduct/DeleteProductController';
import { EditProductController } from '../modules/products/useCases/editProduct/EditProductController';
import { ListAllProductsController } from '../modules/products/useCases/listAllProducts/ListAllProductsController';
import { ListProductByIdController } from '../modules/products/useCases/listProductById/ListProductByIdController';

const productRoute = Router();
const createProductController = new CreateProductController();
const listAllProductsController = new ListAllProductsController();
const listProductByIdController = new ListProductByIdController();
const editProductController = new EditProductController();
const deleteProductController = new DeleteProductController();

productRoute.post('/', createProductController.handle);
productRoute.get('/', listAllProductsController.handle);
productRoute.get('/:id', listProductByIdController.handle);
productRoute.patch('/:id', editProductController.handle);
productRoute.delete('/:id', deleteProductController.handle);

export { productRoute };
