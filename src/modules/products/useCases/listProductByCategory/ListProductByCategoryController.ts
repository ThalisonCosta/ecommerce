import { Request, Response } from 'express';
import { listProductByCategoryUseCase } from './ListProductByCategoryUseCase';

export const listProductByCategoryController = async (req:Request, res:Response) =>{
  const { id } = req.params;
  const product = await listProductByCategoryUseCase(Number(id));
  return res.status(200).json(product);
};
