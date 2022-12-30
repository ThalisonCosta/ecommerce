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
      }
    });
    return order;
  }
}