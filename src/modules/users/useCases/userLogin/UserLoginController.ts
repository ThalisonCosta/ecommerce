import { Request, Response } from 'express';
import { userLoginUseCase } from './UserLoginUseCase';

export const userLoginController =  async (req:Request, res:Response) => {
  const {email, password} = req.body;
  const login = await userLoginUseCase(email, password);
  return res.status(200).json(login);
};
