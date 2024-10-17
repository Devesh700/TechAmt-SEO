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
  author: string;
  readingTime: string;
  thumbnail: string;  // Thumbnail image URL
};

type BlogListProps = {
  posts: BlogPost[];
};

const categories = ['All', 'Web Development', 'AI', 'Company News'];

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = useMemo(() => 
    posts?.filter(post => {
      const matchedWithCategory = post.category === selectedCategory || selectedCategory === 'All';
      const matchedSearchQuery = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchedWithCategory && matchedSearchQuery;
    }), 
    [posts, searchQuery, selectedCategory]
  );

  const displayedPosts = useMemo(() => 
    filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage),
    [filteredPosts, currentPage]
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Featured post (can be dynamically fetched or selected manually)
  const featuredPost = posts[0]; // Example: Set the first post as the featured post.

  // Recent posts (example: last 3 posts)
  const recentPosts = posts.slice(-3);

  return (
    <>
      <Navbar />
      <Head>
        <title>Blog | TechAmt</title>
        <meta name="description" content="Stay updated with the latest blog posts and news from TechAmt." />
      </Head>

      <div className="blog-list-page py-16 bg-gray-100">
        <div className="container mx-auto">
          {/* Featured Post */}
          <div className="featured-post mb-12">
            <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={featuredPost.thumbnail}
                alt={featuredPost.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 p-8 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-white mb-4">{featuredPost.title}</h2>
                <p className="text-white text-lg mb-4">{featuredPost.excerpt}</p>
                <Link href={`/blog/${featuredPost.slug}`} className="bg-primary text-white px-6 py-3 rounded-full">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Blog Posts Section */}
            <div className="w-full lg:w-3/4">
              {/* Category Filter */}
              <div className="flex justify-center mb-8">
                {categories.map(category => (
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
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search blog posts..."
                  className="w-full max-w-md p-4 rounded-lg border border-gray-300"
                />
              </div>

              {/* Blog Post Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {displayedPosts.length > 0 ? (
                  displayedPosts.map(post => (
                    <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                      <img src={post.thumbnail} alt={post.title} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                        <p className="text-sm text-gray-500 mb-4">{post.date} • {post.readingTime} • {post.category}</p>
                        <p className="mb-4">{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`} className="text-primary font-semibold">
                          Read More →
                        </Link>
                        <p className="text-sm text-gray-600 mt-4">By {post.author}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No posts found</p>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(idx + 1)}
                      className={`px-4 py-2 mx-2 rounded-full text-sm ${
                        currentPage === idx + 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block w-1/4">
              {/* Recent Posts */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                {recentPosts.map(post => (
                  <Link href={`/blog/${post.slug}`} key={post.id} className="block mb-4">
                    <div className="flex items-center">
                      <img src={post.thumbnail} alt={post.title} className="w-12 h-12 object-cover rounded mr-4" />
                      <div>
                        <h4 className="text-md font-bold">{post.title}</h4>
                        <p className="text-sm text-gray-600">{post.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category} className="mb-2">
                      <button onClick={() => setSelectedCategory(category)} className="text-primary hover:underline">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subscription Box */}
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
                <p className="text-sm text-gray-600 mb-4">Stay updated with the latest posts from TechAmt.</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300"
                />
                <button className="bg-primary text-white w-full py-3 rounded-lg">
                  Subscribe
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogList;

export async function getStaticProps() {
  const posts = [
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
  ];

  return {
    props: {
      posts,
    },
  };
}
