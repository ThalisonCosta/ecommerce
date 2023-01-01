import { Request, Response } from 'express';
import { DeleteCategoryUseCase } from './DeleteCategoryUseCase';

const deleteCategoryUseCase = new DeleteCategoryUseCase();

export class DeleteCategoryController {
  async handle(req:Request, res:Response){
    const {id} = req.params;
    await deleteCategoryUseCase.execute(Number(id));
    return res.status(204).send();
  }
}