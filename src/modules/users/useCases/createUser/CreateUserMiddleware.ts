import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../prisma/client';

export class CreateUserMiddleware{
  async validate(req:Request, res:Response, next:NextFunction){
    const { name, email, password } = req.body;

    const user = await prisma.users.findUnique({
      where: {
        email: email
      }
    });
    if (user){
      throw new AppError('user already created');
    }
    if(!email.includes('@') || !email.includes('.')){
      throw new AppError('invalid email',401);
    }

    if (name.length < 3) {
      throw new AppError('name too short');
    } 
    
    if(password.length < 8) {
      throw new AppError('password too short');
    }


    next();
  }
}