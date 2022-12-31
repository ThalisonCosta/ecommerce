import { Request, Response } from 'express';
import { decode } from '../../../../utils/commom';
import { EditProductUseCase } from './EditProductUseCase';

const editProductUseCase = new EditProductUseCase();

export class EditProductController {
  async handle(req:Request, res:Response){
    const { id } = req.params;
    if(req.headers.authorization){
      const userId = String(decode(req.headers.authorization));
      const result = await editProductUseCase.execute(Number(id), req.body, userId);
      return res.status(200).json(result);
    }
  }
}