import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { listProductByCategoryUseCase } from './ListProductByCategoryUseCase';

export const listProductByCategoryController = async (req:Request, res:Response) =>{
  const { id } = req.params;
  const categoryId = Number(id);
  if(!Number.isInteger(categoryId)){
    throw new AppError('category not found', 404);
  }
  const product = await listProductByCategoryUseCase(categoryId);
  return res.status(200).json(product);
};
