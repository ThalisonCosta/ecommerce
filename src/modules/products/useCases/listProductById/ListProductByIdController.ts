import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { ListProductByIdUseCase } from './ListProductByIdUseCase';

export class ListProductByIdController{
  async handle(req:Request, res:Response){
    const { id } = req.params;
    const listProductByIdUseCase = new ListProductByIdUseCase();
    const result = await listProductByIdUseCase.execute(Number(id));
    if (result) {
      return res.status(200).json(result);
    }
    throw new AppError('product not found');
  }
}
