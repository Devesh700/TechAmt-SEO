import Link from 'next/link';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Dynamically import non-critical sections
const WhyWorkWithUs = dynamic(() => import('../../components/WhyWorkWithUs'));
const WorkEnvironment = dynamic(() => import('../../components/WorkEnvironment'));
const JoinTeam = dynamic(() => import('../../components/JoinTeam'));

type Job = {
  title: string;
  location: string;
  description: string;
};

type CareersPageProps = {
  jobs: Job[];
};

const CareersPage: React.FC<CareersPageProps> = ({ jobs }) => {
  return (
    <>
    <Head>
        <title>Careers at TechAmt | Join Our Innovative Team</title>
        <meta name="description" content="Explore exciting career opportunities at TechAmt. Join our dynamic team and work on cutting-edge technology projects in a collaborative environment." />
        <meta property="og:title" content="Careers at TechAmt" />
        <meta property="og:description" content="Explore exciting career opportunities at TechAmt. Join our dynamic team and work on cutting-edge technology projects in a collaborative environment." />
        <meta property="og:image" content="/images/techamt-careers.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar/>
    <div className="careers-page">
      {/* Hero Section */}
      <section className="hero bg-primary text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Team at TechAmt</h1>
          <p className="text-xl mb-6">
            Be part of an innovative company with a collaborative and dynamic work environment.
          </p>
          <a href="#jobs" className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold">
            View Current Openings
          </a>
        </div>
      </section>

      {/* Why Work with Us - Lazy Loaded */}
      <WhyWorkWithUs />

      {/* Work Environment - Lazy Loaded */}
      <WorkEnvironment />

      {/* Current Openings Section */}
      <section id="jobs" className="current-openings bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Current Openings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <div key={job.title} className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">{job.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{job.location}</p>
                <p className="mb-4">{job.description}</p>
                <Link href={`/careers/${job.title.toLowerCase().replace(/ /g, '-')}`}
                className="bg-primary text-white px-4 py-2 rounded-lg">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section - Lazy Loaded */}
      <JoinTeam />
      <Footer/>
    </div>
    </>
  );
};

export default CareersPage;

export async function getStaticProps() {
  const jobs = [
    { title: 'Frontend Developer', location: 'Remote', description: 'Build responsive UIs with React and Next.js.' },
    { title: 'Backend Developer', location: 'New York', description: 'Develop APIs with Node.js and MongoDB.' },
    { title: 'DevOps Engineer', location: 'Remote', description: 'Maintain cloud infrastructure using AWS and Docker.' },
  ];

  return {
    props: {
      jobs,
    },
  };
}
