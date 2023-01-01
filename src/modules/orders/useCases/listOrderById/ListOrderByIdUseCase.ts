import { prisma } from '../../../../prisma/client';

export const listOrderByIdUseCase = async (id:number, userId:string):Promise<unknown> => {
  const ordersById = await prisma.orders.findFirst({
    where:{
      id,
      userId,
    },
    include:{
      product:{
        select:{
          category: true,
          id: true,
          name:true,
          price:true,
          image: true,
          description: true,
          userOrder: false,
          created_at:true
        }
      }
    }
  });
  return ordersById;
};