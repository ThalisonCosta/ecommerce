import { Products} from '@prisma/client';
import { prisma } from '../../../../prisma/client';

type productNoUserId = Omit<Products, 'userId'>;
interface Product {
  total: number,
  products: productNoUserId[]


}

export const listAllProductsUseCase = async ():Promise<Product> => {
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
  return {
    total: products.length,
    products: products
  };
};
