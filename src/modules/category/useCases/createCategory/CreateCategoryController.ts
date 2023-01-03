import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { createCategoryUseCase } from './CreateCategoryUseCase';

export const createCategoryController = async (req:Request, res: Response) => {
  const {name} = req.body;
  if(typeof name !== 'string'){
    throw new AppError('invalid category name');
  }
  const category = await createCategoryUseCase(name);
  return res.status(201).json(category);
};
