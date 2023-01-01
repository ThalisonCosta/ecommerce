import { prisma } from '../../../../prisma/client';

export const listProductByCategoryUseCase = async (id?:number):Promise<unknown> => {
  const productsFromCategory = await prisma.products.findMany({
    where:{
      categoryId: id
    },
    include:{
      category:true
    }
  });
  return productsFromCategory;
};
