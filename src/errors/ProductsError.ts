import { AppError } from './AppError';

export const bodyLength = (category:string, name:string, price:string, description:string):void=>{
  const regExp = /[a-zA-Z]/g;
  if(regExp.test(category)){
    throw new AppError('invalid categoryId');
  }
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
