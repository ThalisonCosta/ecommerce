import { Request, Response } from 'express';
import { decode } from '../../../../utils/commom';
import { listOrderUseCase } from './ListOrderUseCase';


export const listOrderController = async (req:Request, res: Response) => {
  const { authorization } = req.headers;
  if(authorization){
    const id = decode(authorization);
    const userId = String(id);
    const orders = await listOrderUseCase(userId);
    return res.status(200).json(orders);
  }
};
