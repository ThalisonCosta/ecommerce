import { prisma } from '../../../../prisma/client';

export const deleteCategoryUseCase = async (id:number):Promise<void> => {
  await prisma.category.delete({
    where:{
      id
    }
  });
};
