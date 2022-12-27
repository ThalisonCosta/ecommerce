import { Products } from '@prisma/client';
import { prisma } from '../../../../prisma/client';

export class ListProductsUseCase{
  async execute(): Promise<Products[]>{
    const products = await prisma.products.findMany({
      orderBy: {
        created_at: 'desc'
      },
    });
    return products;
  }
}