import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../../../../errors/AppError';
import * as check from '../../../../errors/UserError';

export const userLoginMiddleware = async (req:Request, _res:Response, next: NextFunction) => {
  if (req.body.email == null || req.body.password == null) {
    throw new AppError('invalid body');
  }
  else {
    const {email, password} = req.body;
    check.emailFormat(email);
    check.passwordFormat(password);
  }
  next();
};

export const validateJWT = async (req:Request, res:Response, next:NextFunction) => {
  const {authorization} = req.headers;
  if( authorization != undefined && authorization.startsWith('Bearer') ){
    
    const [_, token] = authorization.split(' ');
    console.log(token);
    
    const validToken = verify(token, process.env.JWT_KEY!);
    console.log(validToken);
    
    next();
  }
};
