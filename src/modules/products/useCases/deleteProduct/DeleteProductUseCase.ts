import { Prisma } from '@prisma/client';
import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../prisma/client';
import { unlink } from 'fs';

export const deleteProductUseCase = async (id:number, userId:string):Promise<Prisma.BatchPayload> => {
  const productExists = await prisma.products.findUnique({
    where:{
      id
    }
  });
  if(!productExists){throw new AppError('product not found!', 404);}
  
  const permission = await prisma.products.findMany({
    where:{
      id,
      userId
    }
  });
    
  if(!permission.length){
    throw new AppError('you have no permission', 401);
  }

  const product = await prisma.products.findMany({
    where:{
      id
    }      
  });
  
  if(product[0].image) {
    unlink(`src/assets/${product[0].image.slice(30,71)}`, (err) => {
      if (err) throw err;
    });
  }
    
  const deleted = await prisma.products.deleteMany({
    where: {
      id,
      userId
    }
  });

  return deleted;
};
