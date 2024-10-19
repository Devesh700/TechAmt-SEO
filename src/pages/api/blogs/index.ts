// api/blogs/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../utils/connectDb';
import Blog from '../models/Blog';
import handleApi from '../utils/handleApi';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  if (req.method === 'GET') {
    const blogs = await Blog.find({});
    return res.status(200).json(blogs);
  }

  if (req.method === 'POST') {
    const { title, content, tags, author } = req.body;

    const existingBlog = await Blog.findOne({ title });
    if (existingBlog) {
      return res.status(409).json({ message: "Blog already exists" });
    }

    const newBlog = new Blog({
      title, content, tags, author,
    });
    await newBlog.save();
    return res.status(201).json(newBlog);
  }

  res.status(405).json({ message: 'Method not allowed' });
};

export default handleApi(handler);
