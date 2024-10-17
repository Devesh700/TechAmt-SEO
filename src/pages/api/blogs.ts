import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
const blogs=[
    {
      id: '1',
      title: 'Building Scalable Web Applications',
      excerpt: 'Learn how to scale web apps efficiently...',
      date: 'Oct 10, 2024',
      slug: 'scalable-web-apps',
      category: 'Web Development',
      author: 'John Doe',
      readingTime: '5 min read',
      thumbnail: '/images/web-development.jpg',
    },
    {
      id: '2',
      title: 'The Future of AI in Tech',
      excerpt: 'Exploring the role of AI in the future of technology...',
      date: 'Sep 15, 2024',
      slug: 'future-of-ai',
      category: 'AI',
      author: 'Jane Smith',
      readingTime: '7 min read',
      thumbnail: '/images/ai.jpg',
    },
    {
      id: '3',
      title: 'Building Scalable Web Applications',
      excerpt: 'Learn how to scale web apps efficiently...',
      date: 'Oct 10, 2024',
      slug: 'scalable-web-apps',
      category: 'Web Development',
      author: 'John Doe',
      readingTime: '5 min read',
      thumbnail: '/images/web-development.jpg',
    },
    {
      id: '4',
      title: 'The Future of AI in Tech',
      excerpt: 'Exploring the role of AI in the future of technology...',
      date: 'Sep 15, 2024',
      slug: 'future-of-ai',
      category: 'AI',
      author: 'Jane Smith',
      readingTime: '7 min read',
      thumbnail: '/images/ai.jpg',
    },
    {
      id: '5',
      title: 'Building Scalable Web Applications',
      excerpt: 'Learn how to scale web apps efficiently...',
      date: 'Oct 10, 2024',
      slug: 'scalable-web-apps',
      category: 'Web Development',
      author: 'John Doe',
      readingTime: '5 min read',
      thumbnail: '/images/web-development.jpg',
    },
    {
      id: '6',
      title: 'The Future of AI in Tech',
      excerpt: 'Exploring the role of AI in the future of technology...',
      date: 'Sep 15, 2024',
      slug: 'future-of-ai',
      category: 'AI',
      author: 'Jane Smith',
      readingTime: '7 min read',
      thumbnail: '/images/ai.jpg',
    },
    {
      id: '7',
      title: 'Building Scalable Web Applications',
      excerpt: 'Learn how to scale web apps efficiently...',
      date: 'Oct 10, 2024',
      slug: 'scalable-web-apps',
      category: 'Web Development',
      author: 'John Doe',
      readingTime: '5 min read',
      thumbnail: '/images/web-development.jpg',
    },
    {
      id: '8',
      title: 'The Future of AI in Tech',
      excerpt: 'Exploring the role of AI in the future of technology...',
      date: 'Sep 15, 2024',
      slug: 'future-of-ai',
      category: 'AI',
      author: 'Jane Smith',
      readingTime: '7 min read',
      thumbnail: '/images/ai.jpg',
    },
    // More posts...
  ]
export default function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method==="GET"){
        return res.status(200).json({success:true,message:"Blogs received succesfully",data:blogs})
    }
    else{
        return res.status(404).json({success:true,message:"error receiving blogs"})
    }
}