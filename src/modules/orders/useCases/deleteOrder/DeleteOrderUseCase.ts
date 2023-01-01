import { prisma } from '../../../../prisma/client';

export const deleteOrderUseCase = async (id:number, userId:string):Promise<void> => {
  await prisma.orders.deleteMany({
    where:{
      id,
      userId
    }
  });
};
