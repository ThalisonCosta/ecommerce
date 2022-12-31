import { Request, Response } from 'express';
import { decode } from '../../../../utils/commom';
import { CreateProductUseCase } from './CreateProductUseCase';

const createProductUseCase = new CreateProductUseCase();

export class CreateProductController {
  async handle(req:Request, res:Response){
    const {categoryId, name, price, image, description} = req.body;
    if (req.headers.authorization) {
      const userId = String(decode(req.headers.authorization));
      const result = await createProductUseCase.execute({ categoryId, name, price, image, description, userId });
      return res.status(201).json(result);
    }
  }
}