import { prisma } from '../../../../prisma/client';

export const listProductByIdUseCase = async (id:number):Promise<unknown> =>{
  const product = await prisma.products.findUnique({
    where:{
      id
    },
    select:{
      category:true,
      id:true,
      name:true,
      price:true,
      image:true,
      description:true,
      user:{
        select:{
          name:true
        }
      },
      userId:false,
      created_at:true
    }
  });
    
  return product;
};
