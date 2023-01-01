import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../prisma/client';
import { CreateProductDTO } from '../../dtos/CreateProductDTO';

export const editProductUseCase = async (id:number, data:CreateProductDTO, userId:string) => { 
  const permission = await prisma.products.findMany({
    where:{
      id,
      userId
    },
  });
  if(permission.length) {
    await prisma.products.updateMany({
      where: {
        id,
        userId
      },
      data
    });
    return data;
  }
  throw new AppError('you have no permission', 401);
};
