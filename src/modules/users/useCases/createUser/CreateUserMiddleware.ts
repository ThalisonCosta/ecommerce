import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../prisma/client';

export class CreateUserMiddleware{
  async validate(req:Request, res:Response, next:NextFunction){
    const { name, email, password } = req.body;

    const userExists = await prisma.users.findUnique({
      where: {
        email: email
      }
    });
    if (userExists){
      throw new AppError('user already created');
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