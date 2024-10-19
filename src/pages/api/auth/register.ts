// api/auth/register.ts
import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../utils/connectDb';
import User from '../models/User';
import handleApi from '../utils/handleApi';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handleApi(handler);
