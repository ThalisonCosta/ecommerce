import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../prisma/client';

export const deleteOrderUseCase = async (id:number, userId:string):Promise<void> => {
  const order = await prisma.orders.findUnique({
    where:{
      id
    }
  });
  if(!order?.id){
    throw new AppError('order not found!', 404);
  }

  // const access = await prisma.orders.findMany({
  // });
  const {count} = await prisma.orders.deleteMany({
    where:{
      id,
      userId
    }
  });
  if(count == 0){
    throw new AppError('no access to this item!', 401);
  }
  
};
