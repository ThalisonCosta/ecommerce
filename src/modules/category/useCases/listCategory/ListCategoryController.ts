import { Request, Response } from 'express';
import { listCategoryUseCase } from './ListCategoryUseCase';

export const listCategoryController = async (_req:Request, res:Response) => {
  const categories = await listCategoryUseCase();
  return res.status(200).json(categories);
};
