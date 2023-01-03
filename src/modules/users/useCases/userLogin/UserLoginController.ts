import { compare } from 'bcrypt';
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../errors/AppError';
import { userLoginUseCase } from './UserLoginUseCase';

export const userLoginController =  async (req:Request, res:Response) => {
  const {email, password} = req.body;
  const user = await userLoginUseCase(email); 

  if(await compare(password, user.password)){
    if(process.env.REFRESH_TOKEN_SECRET && process.env.JWT_KEY){
      const refreshToken = sign({id: user.id}, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '90d' });
      const token = sign({refreshToken: refreshToken} , process.env.JWT_KEY, { expiresIn: '1800s' });
      return res.status(200).json({
        message: 'Authentication success!',
        accessToken: token,
        refreshToken: refreshToken
      });
    }
  } else throw new AppError('Authentication failed', 401);
};
