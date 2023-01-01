import { prisma } from '../../../../prisma/client';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';
 
export const CreateUserUseCase = async ({name, email, password}:CreateUserDTO):Promise<{message: string}>=> {
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
};