import { Prisma } from '@prisma/client';
import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../prisma/client';
import { unlink } from 'fs';

export const deleteProductUseCase = async (id:number, userId:string):Promise<Prisma.BatchPayload> => {
    
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

  if(product.length) {
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
