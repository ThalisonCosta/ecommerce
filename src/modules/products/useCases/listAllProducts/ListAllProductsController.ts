import { Request, Response } from 'express';
import { listAllProductsUseCase } from './ListAllProductsUseCase';

export const listAllProductsController = async (_req:Request, res:Response) => {
  const result = await listAllProductsUseCase();
  return res.status(200).json(result);
};
  