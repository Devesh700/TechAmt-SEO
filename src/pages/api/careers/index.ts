import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../utils/connectDb';
import Career from '../models/Career';
import handleApi from '../utils/handleApi';
import { protectRoute } from '../auth';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const careers = await Career.find({});
      res.status(200).json(careers);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching careers', error });
    }
  } else if (req.method === 'POST') {
    try {
      const { title, description, location, employmentType } = req.body;
      
      // Check if the career already exists
      const existingCareer = await Career.findOne({ title, description, location, employmentType });
      if (existingCareer) {
        return res.status(409).json({ message: "Career option already present in database" });
      }

      const newCareer = new Career({ title, description, location, employmentType });
      await newCareer.save();
      res.status(201).json(newCareer);
    } catch (error) {
      res.status(500).json({ message: 'Error creating career', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export default protectRoute(handleApi(handler));