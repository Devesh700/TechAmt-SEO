// api/projects/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../utils/connectDb';
import Project from '../models/Project';
import handleApi from '../utils/handleApi';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  if (req.method === 'GET') {
    const projects = await Project.find({});
    return res.status(200).json(projects);
  }

  if (req.method === 'POST') {
    const { title, description, technologies, repoLink, liveLink } = req.body;

    const existingProject = await Project.findOne({ title });
    if (existingProject) {
      return res.status(409).json({ message: "Project already exists" });
    }

    const newProject = new Project({
      title, description, technologies, repoLink, liveLink,
    });
    await newProject.save();
    return res.status(201).json(newProject);
  }

  res.status(405).json({ message: 'Method not allowed' });
};

export default handleApi(handler);
