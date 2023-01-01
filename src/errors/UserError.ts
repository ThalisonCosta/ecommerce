import { NextFunction } from 'express';
import { prisma } from '../prisma/client';
import { AppError } from './AppError';

export const EmailAlreadyExists = async(email:string)=>{
  const user = await prisma.users.findUnique({
    where: {
      email
    }
  });
  if (user){
    throw new AppError('user already created');
  }
};
  
export const EmailFormat = (email:string) => {
  if(!email.includes('@') || !email.includes('.')){
    throw new AppError('invalid email',401);
  }
};
  
export const NameFormat= (name:string) =>{
  if (name.length < 3) {
    throw new AppError('name too short');
  }
}; 

export const PasswordFormat = (password:string) => {
  if(password.length < 8) {
    throw new AppError('password too short');
  }
};
