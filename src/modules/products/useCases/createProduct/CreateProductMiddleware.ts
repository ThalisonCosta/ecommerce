import { AppError } from '../../../../errors/AppError';

export const bodyLength = (name:string, price:string, description:string):void=>{
  if(name.length >= 190){
    throw new AppError('name too long');
  }
  if(price.length >= 35){
    throw new AppError('price too long');
  }
  if(description.length >= 190){
    throw new AppError('description too long');
  }
};
