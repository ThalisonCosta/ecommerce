import { Request, Response } from 'express';
import { ListOrderByIdUseCase } from './ListOrderByIdUseCase';

export class ListOrderByIdController {
  async handle(req:Request, res:Response){
    const {id} = req.params;
    const listOrderByIdUseCase = new ListOrderByIdUseCase();
    const orderById = await listOrderByIdUseCase.execute(Number(id));
    return res.status(200).json(orderById);
  }
}