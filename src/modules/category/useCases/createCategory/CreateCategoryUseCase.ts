import { Category } from '@prisma/client';
import { prisma } from '../../../../prisma/client';

export const createCategoryUseCase = async (name:string): Promise<Category> => {
  const category = await prisma.category.create({
    data:{
      name,
    },
  });
  return category;
};
