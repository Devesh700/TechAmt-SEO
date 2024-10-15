// src/pages/about.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
    <Head>
        <title>About</title>
    </Head>
      <Navbar />
      <main className="container mx-auto my-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            At Techamt, we are dedicated to delivering top-notch IT solutions that help businesses thrive in the digital age.
            Our team of experienced professionals is committed to innovation and customer satisfaction.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
