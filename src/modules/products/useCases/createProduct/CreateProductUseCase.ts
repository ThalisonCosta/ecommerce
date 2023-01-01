import { Products } from '@prisma/client';
import { prisma } from '../../../../prisma/client';
import {CreateProductDTO} from '../../dtos/CreateProductDTO';

export class CreateProductUseCase {
  async execute({categoryId, name, price, image, description, userId}:CreateProductDTO): Promise<Omit<Products, 'userId'>>{
    const product = await prisma.products.create({
      data: {
        categoryId: Number(categoryId),
        name,
        price,
        image: `${process.env.BASE_URL}uploads/${image}`,
        description,
        userId
      },
      select:{
        id:true,
        userId:false,
        categoryId:true,
        name:true,
        price:true,
        image:true,
        description:true,
        created_at:true
      },
    });
    
    return product;
  }
} 