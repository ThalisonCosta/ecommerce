import { Request, Response } from 'express';
import { ListAllProductsUseCase } from './ListAllProductsUseCase';

export class ListAllProductsController{
  async handle(_req:Request, res:Response){
    const listAllProductsUseCase = new ListAllProductsUseCase();
    const result = await listAllProductsUseCase.execute();
    return res.status(200).json(result);
  }
}