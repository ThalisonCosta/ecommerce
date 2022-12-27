import { Request, Response } from 'express';
import { CreateProductUseCase } from './CreateProductUseCase';

export class CreateProductController {
  async handle(req:Request, res:Response){
    const {categoryId, name, price, image, description} = req.body;
    const createProductUseCase = new CreateProductUseCase();
    const result = await createProductUseCase.execute({ categoryId, name, price, image, description });
    return res.status(201).json(result);
  }
}