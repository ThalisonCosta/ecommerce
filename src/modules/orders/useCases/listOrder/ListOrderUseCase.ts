import { Orders } from '@prisma/client';
import { prisma } from '../../../../prisma/client';

export const listOrderUseCase = async (userId:string): Promise<Orders[]> => {
  const orders = await prisma.orders.findMany({
    where:{
      userId
    },
    include:{
      product:true
    }
  });
  return orders;
};
