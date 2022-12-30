import { Orders } from '@prisma/client';
import { prisma } from '../../../../prisma/client';
import { CreateOrderDTO } from '../../dtos/CreateOrderDTO';

export class CreateOrderUseCase {
  async execute({productId, quantity, userId}:CreateOrderDTO): Promise<Orders>{
    
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
  }
}