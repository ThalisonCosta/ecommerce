import { Request, Response } from 'express';
import { decode } from '../../../../utils/commom';
import { deleteProductUseCase } from './DeleteProductUseCase';

export const deleteProductController = async (req:Request, res:Response) => {
  const { id } = req.params;
  if(req.headers.authorization){
    const userId = String(decode(req.headers.authorization));
    await deleteProductUseCase(Number(id), userId);
    return res.status(204).send();
  }
};
