import { Products } from '@prisma/client';
import { prisma } from '../../../../prisma/client';

type noUserId = Omit<Products, 'userId'>

export const listAllProductsUseCase = async ():Promise<noUserId[]> => {
  const products = await prisma.products.findMany({
    orderBy: {
      created_at: 'desc'
    },
    select:{
      userId:false,
      id:true,
      name:true,
      price:true,
      image:true,
      description:true,
      created_at:true,
      categoryId:true,
      user:{
        select:{
          name:true
        }
      }
    }
  });
  return products;
};
