import { unlink } from 'fs';
import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../prisma/client';
import { CreateProductDTO } from '../../dtos/CreateProductDTO';

export const editProductUseCase = async (id:number, data:CreateProductDTO, userId:string, image?:string) => { 
  const products = await prisma.products.findMany({
    where:{
      id,
      userId
    },
  });

  if(products.length) {
    if(typeof image !== 'undefined') {
      if(products[0].image){
        unlink(`src/assets/${products[0].image.slice(30, 71)}`, (err) => {
          if (err) throw err;
        });
      }    
    }
    await prisma.products.updateMany({
      where: {
        id,
        userId
      },
      data:{
        categoryId: data.categoryId,
        name: data.name,
        price:data.price,
        image: image !== undefined ? `${process.env.BASE_URL}uploads/${image}` : undefined,
        description:data.description,
        userId
      }
    });

    const productUpdated = {
      categoryId: data.categoryId,
      name: data.name,
      price: Number(data.price),
      image: image !== undefined ? `${process.env.BASE_URL}uploads/${image}` : undefined,
      description: data.description,
    };

    return productUpdated;
  } if(!products.length) {
    throw new AppError('you have no permission', 401);
  }
};
