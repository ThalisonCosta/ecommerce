import { prisma } from '../../../../prisma/client';

export class ListOrderByIdUseCase {
  async execute(id:number):Promise<unknown>{
    const ordersById = await prisma.orders.findFirst({
      where:{
        id,
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
  }
}