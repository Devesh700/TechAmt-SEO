// utils/handleApi.ts
import { NextApiRequest, NextApiResponse } from 'next';

type HandlerFn = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export default function handleApi(handler: HandlerFn) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch (error:unknown) {
      const errorMessage=error instanceof Error?error.message:"an unknown error occured";
      const status =(error as any )?.status || 500;
      console.error('API Error:', error);
      res.status(status).json({
        success: false,
        message: errorMessage || 'An unexpected error occurred',
        error: process.env.NODE_ENV === 'development' ? error : {}, // Send detailed errors only in development
      });
    }
  };
}
