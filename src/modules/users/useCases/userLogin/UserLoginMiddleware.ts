import { NextFunction, Request, Response } from 'express';
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
