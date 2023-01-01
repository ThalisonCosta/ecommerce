import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import * as check from '../../../../errors/UserError';

export class UserLoginMiddleware{
  async validate(req:Request, _res:Response, next: NextFunction){
    if (req.body.email == null || req.body.password == null) {
      throw new AppError('invalid body');
    } else {
      const {email, password} = req.body;
      check.EmailFormat(email);
      check.PasswordFormat(password);
    }
    next();
  }
}