import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
  async handle(req:Request, res: Response){
    const {name} = req.body;
    const createCategoryUseCase = new CreateCategoryUseCase();
    const category = await createCategoryUseCase.exectute(name);
    return res.status(201).json(category);
  }
}