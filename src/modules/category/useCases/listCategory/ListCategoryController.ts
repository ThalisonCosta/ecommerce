import { Request, Response } from 'express';
import { ListCategoryUseCase } from './ListCategoryUseCase';

export class ListCategoryController {
  async handle(_req:Request, res:Response){
    const listCategoryUseCase = new ListCategoryUseCase();
    const categories = await listCategoryUseCase.execute();
    return res.status(200).json(categories);
  }
}