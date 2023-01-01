import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { listProductByIdUseCase } from './ListProductByIdUseCase';

export const listProductByIdController = async (req:Request, res:Response) =>{
  const { id } = req.params;
  const result = await listProductByIdUseCase(Number(id));
  if (result) {
    return res.status(200).json(result);
  }
  throw new AppError('product not found');
};
