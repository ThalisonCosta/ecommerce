import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';
import {hash} from 'bcrypt';

export class CreateUserController {
  async handle(req:Request, res:Response){
    const {name, email, password} = req.body;
    const createUserUseCase = new CreateUserUseCase();
    const hashPassword = await hash(password, 10);

    const result = await createUserUseCase.execute({name, email, password:hashPassword});
    return res.status(201).json(result);
  }
}
