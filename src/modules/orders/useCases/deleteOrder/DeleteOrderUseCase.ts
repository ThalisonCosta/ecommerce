import { prisma } from '../../../../prisma/client';

export class DeleteOrderUseCase{
  async execute(id:number):Promise<void>{
    await prisma.orders.delete({
      where:{
        id
      }
    });
  }
}