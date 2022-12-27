import { Products } from '@prisma/client';
import { prisma } from '../../../../prisma/client';
import {CreateProductDTO} from '../../dtos/CreateProductDTO';

export class CreateProductUseCase {
  async execute({categoryId, name, price, image, description}:CreateProductDTO): Promise<Products>{
    const product = await prisma.products.create({
      data: {
        categoryId,
        name,
        price,
        image,
        description
      }
    });
    
    return product;
  }
} 