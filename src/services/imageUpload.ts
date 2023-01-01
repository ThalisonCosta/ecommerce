import multer, { FileFilterCallback } from 'multer';
import crypto from 'crypto';
import { Request } from 'express';

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

export const fileStorage = multer.diskStorage({
  destination: (_req: Request, _file: Express.Multer.File, callback: DestinationCallback): void => {
    callback(null, './src/assets');
  },

  filename: (_req: Request, _file: Express.Multer.File, callback: FileNameCallback): void => {
    callback(null, `${crypto.randomUUID()}.jpeg`);
  }
});

export const fileFilter = (_req: Request,file: Express.Multer.File,callback: FileFilterCallback): void => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

export const upload = multer({
  storage: fileStorage,
  limits: {
    fileSize: 1024 * 1024 * 1
  },
  fileFilter: fileFilter
});
