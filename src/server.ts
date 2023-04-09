import './config/env';
import 'express-async-errors';
import morgan from 'morgan';
import express, {NextFunction, Request, Response} from 'express';
import { routes } from './routes';
import cors from 'cors';
import { AppError } from './errors/AppError';

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);
app.use((err: Error, req: Request, res: Response, _next: NextFunction )=>{
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message
    });
  }
  return res.status(500).json({
    message: `Internal Server Error ${err.message}`
  });
});

app.listen(8080, ()=> console.log('server is running on port 8080'));
