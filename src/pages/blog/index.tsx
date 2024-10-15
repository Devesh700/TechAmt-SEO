import { useMemo, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
};

type BlogListProps = {
  posts: BlogPost[];
};

const categories = ['All', 'Web Development', 'AI', 'Company News'];

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts=useMemo(()=>posts?.filter((post)=>{
    const matchedWithCategory=post.category===selectedCategory || selectedCategory==="All";
    const matchedSearchQuery=
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchedWithCategory && matchedSearchQuery;
  }),[posts,searchQuery,selectedCategory])

  return (
    <>
    <Navbar/>
      <Head>
        <title>Blog | TechAmt</title>
        <meta name="description" content="Stay updated with the latest blog posts and news from TechAmt." />
      </Head>

      <div className="blog-list-page py-16 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">TechAmt Blog</h1>

          {/* Category Filter */}
          <div className="flex justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full mr-4 text-sm ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blog posts..."
              className="w-full max-w-md p-4 rounded-lg border border-gray-300"
            />
          </div>

          {/* Blog Post Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} className="bg-white shadow-md p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                  <p className="text-sm text-gray-600 mb-4">{post.date}</p>
                  <p className="mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-blue-600">
                    Read More
                  </Link>
                </div>
              ))
            ) : (
              <p>No posts found</p>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BlogList;

export async function getStaticProps() {
  const posts = [
    {
      id: '1',
      title: 'Building Scalable Web Applications',
      excerpt: 'Learn how to scale web apps...',
      date: 'Oct 10, 2024',
      slug: 'scalable-web-apps',
      category: 'Web Development',
    },
    {
      id: '2',
      title: 'The Future of AI in Tech',
      excerpt: 'Exploring the role of AI...',
      date: 'Sep 15, 2024',
      slug: 'future-of-ai',
      category: 'AI',
    },
    // Add more posts
  ];

  return {
    props: {
      posts,
    },
  };
}
