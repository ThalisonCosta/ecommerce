import { Request, Response } from 'express';
import { decode } from '../../../../utils/commom';
import { deleteOrderUseCase } from './DeleteOrderUseCase';

export const deleteOrderController = async (req:Request, res:Response)=> {
  const { id } = req.params;
  const { authorization } = req.headers;
  if(authorization){
    let userId = decode(authorization);
    userId = String(userId);
    deleteOrderUseCase(Number(id), userId);
    res.status(204).send();
  }
};
