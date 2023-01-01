import { prisma } from '../../../../prisma/client';

export class DeleteCategoryUseCase {
  async execute(id:number):Promise<void>{
    await prisma.category.delete({
      where:{
        id
      }
    });
  }
}