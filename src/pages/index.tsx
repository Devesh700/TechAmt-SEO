import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { FaLaptopCode, FaMobileAlt, FaShoppingCart } from 'react-icons/fa';
import Head from 'next/head';
import FeaturedProjects from '../components/FeaturedProjects';
import connectDb from './api/utils/connectDb';

const Home: React.FC = () => {
  connectDb();
  const services = [
    {
      title: 'Web Development',
      description: 'Building fast, responsive, and SEO-friendly websites.',
      icon: <FaLaptopCode />,
    },
    {
      title: 'App Development',
      description: 'Custom mobile apps for iOS and Android platforms.',
      icon: <FaMobileAlt />,
    },
    {
      title: 'Ecommerce Solutions',
      description: 'Scalable eCommerce platforms with top-notch UX.',
      icon: <FaShoppingCart />,
    },
  ];

  const testimonials = [
    {
      name: 'John Doe',
      quote: 'Techamt delivered beyond expectations. The website is fantastic!',
      company: 'ABC Corp',
    },
    {
      name: 'Jane Smith',
      quote: 'Their service is exceptional and their team is highly skilled.',
      company: 'XYZ Ltd',
    },
  ];

  return (
    <>
      <Head>
        <title>Home - Techamt</title>
        <meta name="description" content="Innovative IT solutions including web development, app development, and eCommerce solutions." />
      </Head>
      <Navbar />
      <Hero
        title="Innovative IT Solutions"
        subtitle="We help you achieve digital excellence with our expert IT services."
        ctaText="Get Started"
        ctaLink="#services"
      />
      <Services services={services} />
      <FeaturedProjects/>
      <Testimonials testimonials={testimonials} />
      <Footer />
    </>
  );
};

export default Home;
