import { Request, Response } from 'express';
import { decode } from '../../../../utils/commom';
import { editProductUseCase } from './EditProductUseCase';

export const editProductController = async (req:Request, res:Response) => {
  const { id } = req.params;
  if(req.headers.authorization){
    const userId = String(decode(req.headers.authorization));
    const result = await editProductUseCase(Number(id), req.body, userId);
    return res.status(200).json(result);
  }
};
