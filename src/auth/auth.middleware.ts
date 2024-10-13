import { Request, Response, NextFunction } from 'express';
import authService from './auth.servise';

interface CustomRequest extends Request {
  user: any; // or the actual type of the user object
}

export function authMiddleware(req: CustomRequest, res: Response, next: NextFunction): void {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    res.status(401).send('Access Denied');
    return;
  }

  const token = authHeader.split(' ')[1];
  const user = authService.verifyToken(token);

  if (!user) {
    res.status(400).send('Invalid Token');
    return;
  }

  req.user = user;
  next();
}