import { Orders } from '@prisma/client';
import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../prisma/client';
import { CreateOrderDTO } from '../../dtos/CreateOrderDTO';

export const createOrderUseCase = async({productId, quantity, userId}:CreateOrderDTO): Promise<Orders> => {
  const productExists = await prisma.products.findUnique({
    where:{
      id: productId
    }
  });
  
  if(!productExists){
    throw new AppError('product not found', 404);
  }

  const order = await prisma.orders.create({
    data: {
      productId,
      quantity,
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
  return order;
};
