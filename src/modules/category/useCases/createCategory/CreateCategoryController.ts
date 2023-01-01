import { Request, Response } from 'express';
import { createCategoryUseCase } from './CreateCategoryUseCase';

export const createCategoryController = async (req:Request, res: Response) => {
  const {name} = req.body;
  const category = await createCategoryUseCase(name);
  return res.status(201).json(category);
};
