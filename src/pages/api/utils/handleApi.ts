// utils/handleApi.ts
import { NextApiRequest, NextApiResponse } from 'next';

type HandlerFn = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export default function handleApi(handler: HandlerFn) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch (error: any) {
      console.error('API Error:', error);
      res.status(error.status || 500).json({
        success: false,
        message: error.message || 'An unexpected error occurred',
        error: process.env.NODE_ENV === 'development' ? error : {}, // Send detailed errors only in development
      });
    }
  };
}
