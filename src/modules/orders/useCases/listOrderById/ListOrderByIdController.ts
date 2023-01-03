import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { decode } from '../../../../utils/commom';
import { listOrderByIdUseCase } from './ListOrderByIdUseCase';

export const listOrderByIdController = async (req:Request, res:Response) => {
  const {id} = req.params;
  const { authorization } = req.headers;
  if(authorization){
    let userId = decode(authorization);
    userId = String(userId);
    const orderId = Number(id);

    if(!Number.isInteger(orderId)){
      throw new AppError('order not found', 404);
    }
    const orderById = await listOrderByIdUseCase(orderId, userId);
    return res.status(200).json(orderById);
  }
};
