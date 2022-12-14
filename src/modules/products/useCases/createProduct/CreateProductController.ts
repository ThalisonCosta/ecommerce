import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { bodyLength } from '../../../../errors/ProductsError';
import { prisma } from '../../../../prisma/client';
import { decode } from '../../../../utils/commom';
import { createProductUseCase } from './CreateProductUseCase';


export const createProductController = async (req:Request, res:Response) => {
  if(!req.body.categoryId || !req.body.name || !req.body.price || !req.body.description || !req.file){
    throw new AppError('invalid body');
  } else{
    const {categoryId, name, price, description} = req.body;
    bodyLength(categoryId,name, price, description);
    const category = await prisma.category.findFirst({
      where:{
        id:Number(categoryId)
      }
    });
    if(!category){
      throw new AppError('invalid categoryId');
    }else{
      const image = req.file.filename;
      if (req.headers.authorization) {
        const userId = String(decode(req.headers.authorization));
        const result = await createProductUseCase({ categoryId, name, price, image, description, userId });
        return res.status(201).json(result);
      }
    }
  }
};
