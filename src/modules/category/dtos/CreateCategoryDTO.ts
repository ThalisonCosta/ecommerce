import { Products } from '@prisma/client';

export interface CreateCategoryDTO {
  name: string,
  product: Products[]
}