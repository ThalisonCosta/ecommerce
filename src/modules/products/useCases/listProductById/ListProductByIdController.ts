import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { listProductByIdUseCase } from './ListProductByIdUseCase';

export const listProductByIdController = async (req:Request, res:Response) =>{
  const { id } = req.params;
  
  const productId = Number(id);
  if(!Number.isInteger(productId)){
    throw new AppError('product not found', 404);
  }
  const result = await listProductByIdUseCase(productId);
  if (result) {
    return res.status(200).json(result);
  }
  throw new AppError('product not found');
};
