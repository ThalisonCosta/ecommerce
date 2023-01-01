import { Router } from 'express';
import { createCategoryController } from '../modules/category/useCases/createCategory/CreateCategoryController';
import { deleteCategoryController } from '../modules/category/useCases/deleteCategory/DeleteCategoryController';
import { listCategoryController } from '../modules/category/useCases/listCategory/ListCategoryController';

const categoryRoute = Router();

categoryRoute.post('/', createCategoryController);
categoryRoute.get('/', listCategoryController);
categoryRoute.delete('/:id', deleteCategoryController);

export { categoryRoute };