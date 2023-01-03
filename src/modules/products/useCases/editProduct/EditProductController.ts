import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { decode } from '../../../../utils/commom';
import { editProductUseCase } from './EditProductUseCase';

export const editProductController = async (req:Request, res:Response) => {
  const { id } = req.params;
  if(req.headers.authorization){
    const userId = String(decode(req.headers.authorization));
    const image = req.file?.filename;
    const productId = Number(id);
    if(!Number.isInteger(productId)){
      throw new AppError('product not found', 404);
    }
    const result = await editProductUseCase(productId, req.body, userId, image);
    return res.status(200).json(result);
  }
};
