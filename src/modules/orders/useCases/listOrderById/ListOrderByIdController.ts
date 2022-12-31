import { Request, Response } from 'express';
import { decode } from '../../../../utils/commom';
import { ListOrderByIdUseCase } from './ListOrderByIdUseCase';

const listOrderByIdUseCase = new ListOrderByIdUseCase();

export class ListOrderByIdController {
  async handle(req:Request, res:Response){
    const {id} = req.params;
    const { authorization } = req.headers;
    if(authorization){
      let userId = decode(authorization);
      userId = String(userId);
      const orderById = await listOrderByIdUseCase.execute(Number(id), userId);
      return res.status(200).json(orderById);
    }
  }
}