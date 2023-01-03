import { Category, Products } from '@prisma/client';
import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../prisma/client';


type ProductsCategory = {
  total: number,
  products: Products | unknown & {
    category: Category
  }[]
}

export const listProductByCategoryUseCase = async (id?:number):Promise<ProductsCategory> => {
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
  return {
    total: productsFromCategory.length,
    products: productsFromCategory
  };
};
