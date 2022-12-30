import { Request, Response } from 'express';
import { CreateOrderUseCase } from './CreateOrderUseCase';

export class CreateOrderController{
  async handle(req:Request, res:Response){
    const { productId, quantity, userId } = req.body;
    const createOrderUseCase = new CreateOrderUseCase();
    const result = await createOrderUseCase.execute({productId, quantity, userId});
    return res.status(201).json(result);
  }
}