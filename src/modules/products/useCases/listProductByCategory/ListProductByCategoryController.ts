import { Request, Response } from 'express';
import { ListProductByCategoryUseCase } from './ListProductByCategoryUseCase';

export class ListProductByCategoryController{
  async handle(req:Request, res:Response){
    const { id } = req.params;
    const listProductByCategoryUseCase = new ListProductByCategoryUseCase();
    const product = await listProductByCategoryUseCase.execute(Number(id));
    return res.status(200).json(product);
  }
}