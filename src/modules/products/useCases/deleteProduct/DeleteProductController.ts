import { Request, Response } from 'express';
import { decode } from '../../../../utils/commom';
import { DeleteProductUseCase } from './DeleteProductUseCase';

const deleteProductUseCase = new DeleteProductUseCase();

export class DeleteProductController {
  async handle(req:Request, res:Response){
    const { id } = req.params;
    if(req.headers.authorization){
      const userId = String(decode(req.headers.authorization));
      await deleteProductUseCase.execute(Number(id), userId);
      return res.status(204).send();
    }
  }
}