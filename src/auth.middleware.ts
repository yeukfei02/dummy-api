import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization
      ? req.headers.authorization.replace('Bearer ', '').trim()
      : '';
    console.log('token = ', token);

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('decoded = ', decoded);

        if (decoded) {
          next();
        }
      } catch (e: any) {
        console.log(`AuthMiddleware error, error = ${e.message}`);

        res.status(401).json({
          message: 'Unauthorized',
        });
      }
    } else {
      next();
    }
  }
}
