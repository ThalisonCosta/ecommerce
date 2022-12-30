import { Request, Response } from 'express';
import { decode } from '../../../../utils/commom';
import { CreateOrderUseCase } from './CreateOrderUseCase';

const createOrderUseCase = new CreateOrderUseCase();

export class CreateOrderController{
  async handle(req:Request, res:Response){
    const { productId, quantity } = req.body;
    const { authorization } = req.headers;

    if(authorization){
      const id = decode(authorization);
      const userId = String(id);
      const result = await createOrderUseCase.execute({productId, quantity, userId});
      return res.status(201).json(result);
    }

  }
}
