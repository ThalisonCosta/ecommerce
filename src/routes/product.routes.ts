import { Router } from 'express';
import { createProductController } from '../modules/products/useCases/createProduct/CreateProductController';
import { deleteProductController } from '../modules/products/useCases/deleteProduct/DeleteProductController';
import { editProductController } from '../modules/products/useCases/editProduct/EditProductController';
import { listAllProductsController } from '../modules/products/useCases/listAllProducts/ListAllProductsController';
import { listProductByCategoryController } from '../modules/products/useCases/listProductByCategory/ListProductByCategoryController';
import { listProductByIdController } from '../modules/products/useCases/listProductById/ListProductByIdController';
import { validateJWT } from '../modules/users/useCases/userLogin/UserLoginMiddleware';
import { upload } from '../services/imageUpload';

const productRoute = Router();

productRoute.post('/', validateJWT,upload.single('image'), createProductController);
productRoute.get('/', listAllProductsController);
productRoute.get('/:id', listProductByIdController);
productRoute.get('/category/:id', listProductByCategoryController);
productRoute.patch('/:id',validateJWT, upload.single('image'),editProductController);
productRoute.delete('/:id', validateJWT, deleteProductController);

export { productRoute };
