import { prisma } from '../../../../prisma/client';

export class DeleteProductUseCase{
  async execute(id:number):Promise<void>{
    await prisma.products.delete({
      where: {
        id
      }
    });
  }
}