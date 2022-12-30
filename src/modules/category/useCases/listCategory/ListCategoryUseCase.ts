import { Category } from '@prisma/client';
import { prisma } from '../../../../prisma/client';

export class ListCategoryUseCase {
  async execute():Promise<Omit<Category, 'id' | 'name'>>{
    const categories = await prisma.category.findMany({
      include:{
        product:true
      }
    });
    return categories;
  }
}