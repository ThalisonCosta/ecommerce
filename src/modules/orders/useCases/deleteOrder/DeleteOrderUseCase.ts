import { prisma } from '../../../../prisma/client';

export class DeleteOrderUseCase{
  async execute(id:number, userId:string):Promise<void>{
    await prisma.orders.deleteMany({
      where:{
        id,
        userId
      }
    });
  }
}