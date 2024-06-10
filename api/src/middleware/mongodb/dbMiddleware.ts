import { Request, Response, NextFunction } from 'express';
import { db } from './database';
import { Db } from 'mongodb';

declare global {
  namespace Express {
    interface Request {
      db: Db;
    }
  }
}

export const databaseMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  if (!db) {
    res.status(500).send('Database connection not established');
    return;
  }
  
  req.db = db;
  next();
};