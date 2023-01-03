import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { decode } from '../../../../utils/commom';
import { deleteOrderUseCase } from './DeleteOrderUseCase';

export const deleteOrderController = async (req:Request, res:Response)=> {
  const { id } = req.params;
  const { authorization } = req.headers;
  if(authorization){
    let userId = decode(authorization);
    userId = String(userId);
    const orderId = Number(id);
    if(!Number.isInteger(orderId)){
      throw new AppError('order not found!', 404);
    }
    await deleteOrderUseCase(orderId, userId);
    res.status(204).send();
  }
};
