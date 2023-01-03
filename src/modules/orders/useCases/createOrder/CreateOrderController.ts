import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { decode } from '../../../../utils/commom';
import { createOrderUseCase } from './CreateOrderUseCase';


export const createOrderController = async (req:Request, res:Response) =>{
  
  if(!req.body.productId || !req.body.quantity){
    throw new AppError('invalid body');
  } else {
    const { productId, quantity } = req.body;
    const { authorization } = req.headers;
    
    if(authorization){
      const id = decode(authorization);
      const userId = String(id);
      const result = await createOrderUseCase({productId, quantity, userId});
      return res.status(201).json(result);
    }
  }
};
