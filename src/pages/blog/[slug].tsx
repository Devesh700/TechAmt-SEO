import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface BlogPostProps{
    post: {
    title: string;
    content: string;
    date: string;
    author: string;
    relatedPosts: Array<{ title: string; slug: string }>;
  };
}

const BlogPost:React.FC<BlogPostProps>=({post})=>{
    const router=useRouter();
    return (
        <>
        <Head>
            <title>{`Techamt | Blog / ${router.query.slug}`}</title>
        </Head>
        <div className="blog-post-page py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-sm text-gray-600 mb-8">{post.date}</p>

          {/* Blog Content */}
          <div className="blog-content mb-16">
            <p>{post.content}</p>
          </div>

          {/* Author Bio */}
          <div className="author-bio mb-16">
            <h3 className="text-xl font-semibold mb-4">Written by: {post.author}</h3>
            <p>Bio of the author goes here. This can be a few sentences about their expertise.</p>
          </div>

          {/* Related Posts */}
          <div className="related-posts mb-16">
            <h3 className="text-2xl font-semibold mb-4">Related Posts</h3>
            <ul>
              {post.relatedPosts.map((related) => (
                <li key={related.slug}>
                  <Link href={`/blog/${related.slug}`} className="text-blue-600">
                    {related.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Comments Section */}
          <div className="comments-section">
            <h3 className="text-2xl font-semibold mb-4">Comments</h3>
            {/* Comment form and list can go here */}
          </div>
        </div>
      </div>
      </>
    );
}

export default BlogPost;

export const getStaticPaths:GetStaticPaths=async()=>{
    const blogSlugs=[{title:"scalable-web-apps"},{title:"future-of-ai"}];
    const paths=blogSlugs.map(blog=>({params:{slug:blog.title.toLowerCase().replace(/ /g,"-")}}))
    return {paths,fallback:true};
}

export const getStaticProps:GetStaticProps=(context)=>{
    const {slug}=context.params as {slug:string};
    console.log(context);
    const posts = {
        "scalable-web-apps":{
    title: 'Building Scalable Web Applications',
    content: 'In this post, we will explore...',
    date: 'Oct 10, 2024',
    author: 'John Doe',
    relatedPosts: [
      { title: 'The Future of AI in Tech', slug: 'future-of-ai' },
      // more related posts
    ],
  },
        "future-of-ai":{
    title: 'The Future of AI in Tech',
    content: 'In this post, we will explore about future of Ai...',
    date: 'Oct 10, 2024',
    author: 'John Doe',
    relatedPosts: [
      { title: 'Building Scalable Web Applications', slug: 'scalable-web-apps' },
      // more related posts
    ],
  }
  };
  return {
    props:{
        post:posts[slug]
    }
  }
}