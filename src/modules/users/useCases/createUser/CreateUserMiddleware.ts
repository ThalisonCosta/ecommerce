import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import * as check from '../../../../errors/UserError';

export class CreateUserMiddleware{
  async validate(req:Request, _res:Response, next:NextFunction){
    if (req.body.email == null || req.body.name == null || req.body.password == null) {
      throw new AppError('invalid body');
    }
    else{
      const {email, name, password} = req.body;
      await check.EmailAlreadyExists(email);
      check.EmailFormat(email);
      check.NameFormat(name);
      check.PasswordFormat(password);
    }
    next();
  }
}