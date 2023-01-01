import { Router } from 'express';
import { createCategoryController } from '../modules/category/useCases/createCategory/CreateCategoryController';
import { deleteCategoryController } from '../modules/category/useCases/deleteCategory/DeleteCategoryController';
import { listCategoryController } from '../modules/category/useCases/listCategory/ListCategoryController';
import { login } from '../modules/category/useCases/createCategory/CreateCategoryMiddleware';

const categoryRoute = Router();

categoryRoute.post('/', login ,createCategoryController);
categoryRoute.get('/', listCategoryController);
categoryRoute.delete('/:id', login, deleteCategoryController);

export { categoryRoute };