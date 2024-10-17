import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

type BlogPost = {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
  author: {
    name: string;
    bio: string;
    profilePicture: string;
    socialLinks: { twitter?: string; linkedin?: string };
  };
  readingTime: string;
  relatedPosts: Array<{
    id: string;
    title: string;
    slug: string;
    thumbnail: string;
  }>;
};

const BlogPostPage = ({ post }: { post: BlogPost }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Head>
        <title>{post.title} | TechAmt</title>
        <meta name="description" content={`Read the latest blog post on ${post.title} by TechAmt`} />
      </Head>

      <div className="blog-post-page py-16 bg-gray-100">
        <div className="container mx-auto max-w-4xl">
          {/* Blog Post Content */}
          <article className="bg-white shadow-lg p-8 rounded-lg">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-6">
              {post.date} • {post.readingTime} • {post.category}
            </p>
            <div className="prose lg:prose-xl mb-6">
              {/* Post Content (HTML or Markdown rendered content) */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Social Sharing Buttons */}
            <div className="social-sharing mb-8">
              <h3 className="text-lg font-semibold mb-4">Share this post</h3>
              <div className="flex gap-4">
                <button className="bg-blue-500 text-white p-2 rounded-full">
                  <i className="fab fa-twitter"></i> Twitter
                </button>
                <button className="bg-blue-700 text-white p-2 rounded-full">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </button>
                {/* Add other social buttons as needed */}
              </div>
            </div>

            {/* Author Bio */}
            <div className="author-bio bg-gray-100 p-6 rounded-lg mb-8">
              <div className="flex items-center">
                <img
                  src={post.author.profilePicture}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-xl font-bold">{post.author.name}</h4>
                  <p className="text-sm text-gray-600">{post.author.bio}</p>
                  <div className="flex gap-4 mt-2">
                    {post.author.socialLinks.twitter && (
                      <a href={post.author.socialLinks.twitter} className="text-blue-500">
                        <i className="fab fa-twitter"></i> Twitter
                      </a>
                    )}
                    {post.author.socialLinks.linkedin && (
                      <a href={post.author.socialLinks.linkedin} className="text-blue-700">
                        <i className="fab fa-linkedin"></i> LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="related-posts mb-8">
              <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {post.relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                      <img
                        src={relatedPost.thumbnail}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="text-md font-bold">{relatedPost.title}</h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <div className="comments-section bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Comments</h3>
              {/* Comments UI */}
              <div className="mb-6">
                <textarea
                  rows={4}
                  placeholder="Add a comment..."
                  className="w-full p-3 rounded-lg border border-gray-300"
                />
                <button className="mt-4 bg-primary text-white px-6 py-3 rounded-lg">
                  Submit Comment
                </button>
              </div>

              {/* Display existing comments (example comments) */}
              <div className="comments-list">
                <div className="mb-4">
                  <p className="font-semibold">John Doe</p>
                  <p className="text-gray-600">This is a great post! Thanks for sharing.</p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold">Jane Smith</p>
                  <p className="text-gray-600">Really insightful article.</p>
                </div>
              </div>
            </div>
          </article>

          {/* Next/Previous Post Navigation */}
          <div className="next-prev-post-nav flex justify-between mt-12">
            <Link href="/blog/previous-post">
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                ← Previous Post
              </button>
            </Link>
            <Link href="/blog/next-post">
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                Next Post →
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogPostPage;

export async function getStaticPaths() {
  // Generate paths for your blog posts
  const paths = [
    { params: { slug: 'scalable-web-apps' } },
    { params: { slug: 'future-of-ai' } },
    // Add more paths...
  ];
  return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  // Fetch the blog post content by slug
  console.log(params);
  const post = {
    id: '1',
    title: 'Building Scalable Web Applications',
    content: '<p>This is a blog post content about scaling web applications...</p>',
    date: 'Oct 10, 2024',
    category: 'Web Development',
    author: {
      name: 'John Doe',
      bio: 'Full-stack developer specializing in scalable web applications.',
      profilePicture: '/images/authors/john-doe.jpg',
      socialLinks: { twitter: 'https://twitter.com/johndoe', linkedin: 'https://linkedin.com/in/johndoe' },
    },
    readingTime: '5 min read',
    relatedPosts: [
      {
        id: '2',
        title: 'The Future of AI in Tech',
        slug: 'future-of-ai',
        thumbnail: '/images/ai.jpg',
      },
      {
        id: '3',
        title: 'Understanding Microservices Architecture',
        slug: 'microservices-architecture',
        thumbnail: '/images/microservices.jpg',
      },
    ],
  };

  return {
    props: {
      post,
    },
  };
}
