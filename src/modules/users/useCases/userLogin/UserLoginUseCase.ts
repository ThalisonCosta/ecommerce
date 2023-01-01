import {compare} from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../prisma/client';

export const userLoginUseCase = async (email:string, password:string):Promise<unknown> => {
  const user = await prisma.users.findFirst({
    where:{
      email,
    }
  });
    
  if (!user || !await compare(password, user.password)){
    throw new AppError('user not found', 401);
  } else {
    if(await compare(password, user.password)){
      const refreshToken = jwt.sign({id: user.id}, `${process.env.REFRESH_TOKEN_SECRET}`, {expiresIn: '90d'});
      const accessToken = jwt.sign({ refreshToken }, `${process.env.JWT_KEY}`, {expiresIn:'1800s'});
      return {refreshToken, accessToken};
    }  
  }
};
