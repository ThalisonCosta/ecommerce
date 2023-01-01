import { Router } from 'express';
import { CreateCategoryController } from '../modules/category/useCases/createCategory/CreateCategoryController';
import { DeleteCategoryController } from '../modules/category/useCases/deleteCategory/DeleteCategoryController';
import { ListCategoryController } from '../modules/category/useCases/listCategory/ListCategoryController';

const categoryRoute = Router();
const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const deleteCategoryController = new DeleteCategoryController();

categoryRoute.post('/', createCategoryController.handle);
categoryRoute.get('/', listCategoryController.handle);
categoryRoute.delete('/:id', deleteCategoryController.handle);

export { categoryRoute };