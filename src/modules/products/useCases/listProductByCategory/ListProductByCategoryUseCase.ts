import { prisma } from '../../../../prisma/client';

export class ListProductByCategoryUseCase{
  async execute(id?:number):Promise<unknown>{
    const productsFromCategory = await prisma.products.findMany({
      where:{
        categoryId: id
      },
      include:{
        category:true
      }
    });
    return productsFromCategory;
  }
}