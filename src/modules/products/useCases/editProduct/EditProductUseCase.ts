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
      unlink(`src/assets/${products[0].image.slice(30, 71)}`, (err) => {
        if (err) throw err;
      });
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
        image:`${process.env.BASE_URL}uploads/${image}`,
        description:data.description,
        userId
      }
    });

    return data;
  } if(!products.length) {
    throw new AppError('you have no permission', 401);
  }
};
