// utils/auth.ts
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { User } from './models/User';
interface ApiRequest extends NextApiRequest{
    user:User
}
export const protectRoute = (handler: any) => async (req: ApiRequest, res: NextApiResponse) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as User;
    req.user = decoded; // Attach user info to request
    return handler(req, res);
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token',error:error });
  }
};
