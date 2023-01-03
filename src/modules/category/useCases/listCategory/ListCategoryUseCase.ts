import { Category } from '@prisma/client';
import { prisma } from '../../../../prisma/client';

export const listCategoryUseCase = async ():Promise<Omit<Category, 'id' | 'name'>> => {
  const categories = await prisma.category.findMany({
    include:{
      product:true
    }
  });
  return {
    total:categories.length,
    categories: categories
  };
};
