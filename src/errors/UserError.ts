import { prisma } from '../prisma/client';
import { AppError } from './AppError';

export const emailAlreadyExists = async(email:string)=>{
  const user = await prisma.users.findUnique({
    where: {
      email
    }
  });
  if (user){
    throw new AppError('user already created');
  }
};
  
export const emailFormat = (email:string) => {
  if(!email.includes('@') || !email.includes('.')){
    throw new AppError('invalid email',401);
  }
};
  
export const nameFormat= (name:string) =>{
  if (name.length < 3) {
    throw new AppError('name too short');
  }
}; 

export const passwordFormat = (password:string) => {
  if(password.length < 8) {
    throw new AppError('password too short');
  }
};
