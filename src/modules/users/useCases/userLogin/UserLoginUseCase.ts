import { Users } from '@prisma/client';
import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../prisma/client';

export const userLoginUseCase = async (email:string):Promise<Users> => {
  const user = await prisma.users.findFirst({
    where:{
      email,
    }
  });
  if(user){
    return user;
  } else throw new AppError('Authentication failed', 401);
};
