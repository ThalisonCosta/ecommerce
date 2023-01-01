import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import * as check from '../../../../errors/UserError';

export const createUserMiddleware = async (req:Request, _res:Response, next:NextFunction) => {
  if (req.body.email == null || req.body.name == null || req.body.password == null) {
    throw new AppError('invalid body');
  }
  else{
    const {email, name, password} = req.body;
    await check.emailAlreadyExists(email);
    check.emailFormat(email);
    check.nameFormat(name);
    check.passwordFormat(password);
  }
  next();
};
