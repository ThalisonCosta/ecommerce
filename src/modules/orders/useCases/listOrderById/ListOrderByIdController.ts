import { Request, Response } from 'express';
import { decode } from '../../../../utils/commom';
import { listOrderByIdUseCase } from './ListOrderByIdUseCase';

export const listOrderByIdController = async (req:Request, res:Response) => {
  const {id} = req.params;
  const { authorization } = req.headers;
  if(authorization){
    let userId = decode(authorization);
    userId = String(userId);
    const orderById = await listOrderByIdUseCase(Number(id), userId);
    return res.status(200).json(orderById);
  }
};
