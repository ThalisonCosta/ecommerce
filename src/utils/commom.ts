import jwt from 'jsonwebtoken';
import { JwtPayload, refreshToken } from './entity';
 
export function decode(token:string){
  if(token) {
    const { refreshToken } = jwt.decode(token.split(' ')[1]) as JwtPayload;
    const { id } = jwt.decode(refreshToken) as refreshToken;
    const userId = String(id);
    return userId;
  }
}
