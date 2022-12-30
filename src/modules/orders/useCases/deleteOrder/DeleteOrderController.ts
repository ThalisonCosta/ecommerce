import { Request, Response } from 'express';
import { DeleteOrderUseCase } from './DeleteOrderUseCase';

export class DeleteOrderController{
  async handle(req:Request, res:Response){
    const { id } = req.params;
    const deleteOrderUseCase = new DeleteOrderUseCase();
    deleteOrderUseCase.execute(Number(id));
    res.status(204).send();
  }
}