import { Request, Response } from 'express';
import { EditProductUseCase } from './EditProductUseCase';

export class EditProductController {
  async handle(req:Request, res:Response){
    const { id } = req.params;
    const editProductUseCase = new EditProductUseCase();
    const result = await editProductUseCase.execute(Number(id), req.body);
    return res.status(200).json(result);
  }
}