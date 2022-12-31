import { Request, Response } from 'express';
import { decode } from '../../../../utils/commom';
import { ListOrderUseCase } from './ListOrderUseCase';

const listOrderController = new ListOrderUseCase();

export class ListOrderController {
  async handle(req:Request, res: Response){
    const { authorization } = req.headers;
    if(authorization){
      const id = decode(authorization);
      const userId = String(id);
      const orders = await listOrderController.execute(userId);
      return res.status(200).json(orders);
    }
  }
}