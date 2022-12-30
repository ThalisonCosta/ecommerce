import { Request, Response } from 'express';
import { ListOrderUseCase } from './ListOrderUseCase';

export class ListOrderController {
  async handle(req:Request, res: Response){
    const { authorization } = req.headers;
    const listOrderController = new ListOrderUseCase();
    const orders = await listOrderController.execute(`${authorization}`);
    return res.status(200).json(orders);
  }
}