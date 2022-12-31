import { Prisma, Products } from '@prisma/client';
import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../prisma/client';

export class DeleteProductUseCase{
  async execute(id:number, userId:string):Promise<Prisma.BatchPayload>{
    
    const permission = await prisma.products.findMany({
      where:{
        id,
        userId
      }
    });
    
    if(!permission.length){
      throw new AppError('you have no permission', 401);
    }

    const deleted = await prisma.products.deleteMany({
      where: {
        id,
        userId
      }
    });
    return deleted;
  }
}