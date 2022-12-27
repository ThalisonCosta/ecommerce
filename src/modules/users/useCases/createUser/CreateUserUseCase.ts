import { Users } from '@prisma/client';
import { prisma } from '../../../../prisma/client';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';

export class CreateUserUseCase {
  async execute({name, email, password}:CreateUserDTO): Promise<Users> {
    await prisma.users.findUnique({
      where: {
        email: email
      }
    });

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