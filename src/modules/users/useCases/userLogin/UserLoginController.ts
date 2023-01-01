import { Request, Response } from 'express';
import { UserLoginUseCase } from './UserLoginUseCase';

export class UserLoginController {
  async handle(req:Request, res:Response){
    const {email, password} = req.body;
    const userLoginUseCase = new UserLoginUseCase();
    const login = await userLoginUseCase.execute(email, password);
    return res.status(200).json(login);
  }
}