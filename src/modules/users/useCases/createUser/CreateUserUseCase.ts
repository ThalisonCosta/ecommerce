import { Users } from '@prisma/client';
import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../prisma/client';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';

export class CreateUserUseCase {
  async execute({name, email, password}:CreateUserDTO): Promise<Users> {
    const userExists = await prisma.users.findUnique({
      where: {
        email: email
      }
    });

    if(userExists){
      throw new AppError('user already created!');
    }

    const user = await prisma.users.create({
      data:{
        name,
        email,
        password,
      }
    });

    return user;
  }
}