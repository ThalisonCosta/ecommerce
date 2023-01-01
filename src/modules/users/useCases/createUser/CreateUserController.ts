import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';
import {hash} from 'bcrypt';

export const createUserController = async (req:Request, res:Response) => {
  const {name, email, password} = req.body;
  const hashPassword = await hash(password, 10);

  const result = await CreateUserUseCase({name, email, password:hashPassword});
  return res.status(201).json(result);
};