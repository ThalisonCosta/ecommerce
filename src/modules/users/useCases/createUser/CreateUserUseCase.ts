import { prisma } from '../../../../prisma/client';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';
export class CreateUserUseCase {
  async execute({name, email, password}:CreateUserDTO): Promise<object> {
    await prisma.users.findUnique({
      where: {
        email: email
      }
    });
    
    await prisma.users.create({
      data:{
        name,
        email,
        password,
      },
    });

    return {message: 'user created succesfully'};
  }
}