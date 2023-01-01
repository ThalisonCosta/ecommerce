import { Request, Response } from 'express';
import { decode } from '../../../../utils/commom';
import { createProductUseCase } from './CreateProductUseCase';


export const createProductController = async (req:Request, res:Response) => {
  const {categoryId, name, price, description} = req.body;
  if(req.file){
    const image = req.file.filename;
    if (req.headers.authorization) {
      const userId = String(decode(req.headers.authorization));
      const result = await createProductUseCase({ categoryId, name, price, image, description, userId });
      return res.status(201).json(result);
    }
  }
};
