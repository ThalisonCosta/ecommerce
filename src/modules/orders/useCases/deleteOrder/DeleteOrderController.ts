import { Request, Response } from 'express';
import { decode } from '../../../../utils/commom';
import { DeleteOrderUseCase } from './DeleteOrderUseCase';

const deleteOrderUseCase = new DeleteOrderUseCase();
export class DeleteOrderController{
  async handle(req:Request, res:Response){
    const { id } = req.params;
    const { authorization } = req.headers;
    if(authorization){
      let userId = decode(authorization);
      userId = String(userId);
      deleteOrderUseCase.execute(Number(id), userId);
      res.status(204).send();
    }
  }
}