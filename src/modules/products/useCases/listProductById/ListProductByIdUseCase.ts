import { prisma } from '../../../../prisma/client';

export const listProductByIdUseCase = async (id:number):Promise<unknown> =>{
  const product = await prisma.products.findUnique({
    where:{
      id
    }
  });
    
  return product;
};
