import { Router } from 'express';
import { CreateCategoryController } from '../modules/category/useCases/createCategory/CreateCategoryController';
import { ListCategoryController } from '../modules/category/useCases/listCategory/ListCategoryController';

const categoryRoute = Router();
const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();

categoryRoute.post('/', createCategoryController.handle);
categoryRoute.get('/', listCategoryController.handle);

export { categoryRoute };