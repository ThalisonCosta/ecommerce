import { prisma } from '../../../../prisma/client';

export class ListProductByIdUseCase{
  async execute(id:number):Promise<unknown>{
    const product = await prisma.products.findUnique({
      where:{
        id
      }
    });
    
    return product;
  }
}