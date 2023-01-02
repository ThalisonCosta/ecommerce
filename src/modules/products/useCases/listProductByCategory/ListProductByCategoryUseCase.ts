import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../prisma/client';

export const listProductByCategoryUseCase = async (id?:number):Promise<unknown> => {
  const productsFromCategory = await prisma.products.findMany({
    where:{
      categoryId: id
    },
    include:{
      category:true
    },
    orderBy:{
      created_at: 'desc'
    }
  });
  if(!productsFromCategory.length){
    throw new AppError('no products registered',200);
  }
  return productsFromCategory;
};
