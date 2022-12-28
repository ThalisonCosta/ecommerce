import { Products } from '@prisma/client';
import { prisma } from '../../../../prisma/client';
import { CreateProductDTO } from '../../dtos/CreateProductDTO';

export class EditProductUseCase{
  async execute(id:number, data:CreateProductDTO):Promise<Omit<Products, 'created_at'>>{
    const productEdited = await prisma.products.update({
      where: {
        id,
      },
      data,
      select:{
        id:true,
        categoryId:true,
        name: true,
        price: true,
        image: true,
        description: true,
        created_at: false
      }
    });
    return productEdited;
  }
}