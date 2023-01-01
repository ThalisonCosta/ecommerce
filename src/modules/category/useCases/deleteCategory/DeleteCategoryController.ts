import { Request, Response } from 'express';
import { deleteCategoryUseCase } from './DeleteCategoryUseCase';

export const deleteCategoryController = async (req:Request, res:Response) => {
  const {id} = req.params;
  await deleteCategoryUseCase(Number(id));
  return res.status(204).send();
};
