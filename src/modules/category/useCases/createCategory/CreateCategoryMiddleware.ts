import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../prisma/client';
import { decode } from '../../../../utils/commom';

export const login = async (req: Request, _res:Response, next:NextFunction)=>{
  if(!req.headers.authorization) {
    throw new AppError('invalid authorization token', 401);
  } else{
    const userId = String(decode(req.headers.authorization));
    const user = await prisma.users.findFirst({
      where:{
        id: userId
      }
    });

    if(!user){
      throw new AppError('invalid authorization token', 401);
    }
  }
  next();
  
};