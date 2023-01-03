import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { decode } from '../../../../utils/commom';
import { deleteProductUseCase } from './DeleteProductUseCase';

export const deleteProductController = async (req:Request, res:Response) => {
  const { id } = req.params;
  if(req.headers.authorization){
    const userId = String(decode(req.headers.authorization));
    const productId = Number(id);
    if(!Number.isInteger(productId)){
      throw new AppError('product not found', 404);
    }
    await deleteProductUseCase(productId, userId);
    return res.status(204).send();
  }
};
