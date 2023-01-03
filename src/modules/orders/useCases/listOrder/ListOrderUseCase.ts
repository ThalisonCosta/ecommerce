import { Orders } from '@prisma/client';
import { prisma } from '../../../../prisma/client';

export const listOrderUseCase = async (userId:string): Promise<Orders[] | object> => {
  const orders = await prisma.orders.findMany({
    where:{
      userId
    },
    include:{
      product:true
    }
  });
  if(!orders.length){
    return {message:'no orders registered'};
  }
  return {
    total:orders.length,
    orders: orders
  };
};
