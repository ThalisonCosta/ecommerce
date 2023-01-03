import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../prisma/client';

export const deleteCategoryUseCase = async (id:number):Promise<void> => {
  const categories = await prisma.category.findUnique({
    where:{
      id
    },
    include:{
      product:true
    }
  });

  if(!categories){throw new AppError('category not found', 404);}
  if(categories.product.length){throw new AppError('impossible to delete because category has products associated');}
  await prisma.category.delete({
    where:{
      id
    }
  });
};
