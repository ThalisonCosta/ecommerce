import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../errors/AppError';

export const refreshToken = async(req:Request, res:Response) => {
  if(req.body.refreshToken) {
    const {refreshToken} = req.body;
    if(process.env.JWT_KEY){
      const token = sign({refreshToken}, process.env.JWT_KEY, {expiresIn: '1800s'});
      return res.status(200).json({accessToken:token});
    }
  }
  else {
    throw new AppError('invalid token', 401);
  }
};
