import React from "react";
import { FaReact, FaNodeJs, FaAws,  FaDatabase, FaPhp, FaWordpress, FaFigma, FaAndroid } from "react-icons/fa";
// import { FaReact, FaNodeJs, FaAws, FaLaptopCode, FaDatabase, FaPhp, FaWordpress, FaFigma, FaAppStore, FaAndroid } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import Testimonials from "../components/Testimonials";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutUs: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us | Techamt</title>
      </Head>
      <Navbar/>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About Techamt</h1>
          <p className="text-xl max-w-3xl mx-auto">
            At Techamt, we pride ourselves on being a leading IT solutions provider, delivering cutting-edge technology that empowers businesses to thrive in a dynamic, digital world.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Who We Are</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Founded in 2022, Techamt started as a small team of passionate developers and innovators. Over the years, we have grown into a full-scale technology solutions provider, helping businesses from startups to enterprises harness the power of technology to drive growth. Our journey has been marked by a dedication to innovation, customer success, and continuous learning.
          </p>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            We believe in using technology as a force for good, empowering organizations to achieve their potential and making an impact on the global business landscape.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Our mission is to create innovative solutions that solve real-world problems, while delivering an unmatched experience for our clients. We aim to be more than just a service provider—we are your strategic partner in the journey towards digital transformation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                At Techamt, innovation is at the heart of everything we do. We are constantly exploring new technologies to deliver solutions that exceed client expectations.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Client Success</h3>
              <p className="text-gray-600">
                Your success is our success. We go the extra mile to ensure that our solutions drive meaningful results and provide tangible value for your business.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We believe in doing business the right way—with transparency, accountability, and a commitment to the highest ethical standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FiUser className="text-6xl text-primary mb-4" />
              <h3 className="text-2xl font-bold">Manish Mani Tripathi</h3>
              <p className="text-gray-600 mb-2">CEO & Founder</p>
              <p className="text-gray-600">
                With over 12 years of experience in the tech industry, Manish has been a visionary leader, driving innovation at Techamt. His passion for digital transformation fuels the company’s success.
              </p>
            </div>
            <div className="text-center">
              <FiUser className="text-6xl text-primary mb-4" />
              <h3 className="text-2xl font-bold">Devesh Mishra</h3>
              <p className="text-gray-600 mb-2">Full Stack Developer</p>
              <p className="text-gray-600">
                Devesh oversees all technical operations and ensures that our solutions are both cutting-edge and reliable. He is an expert in Database Design and software development.
              </p>
            </div>
            <div className="text-center">
              <FiUser className="text-6xl text-primary mb-4" />
              <h3 className="text-2xl font-bold">Dummy User</h3>
              <p className="text-gray-600 mb-2">Lead Developer</p>
              <p className="text-gray-600">
                User brings his deep knowledge of full-stack development to Techamt. He is passionate about building scalable applications that meet the unique needs of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Technologies We Use</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto text-center mb-12">
            At Techamt, we leverage a diverse range of tools and technologies to deliver high-quality solutions. Our team is proficient in the latest tech trends to ensure that we provide scalable, secure, and efficient services to our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <FaReact className="text-6xl text-blue-500 mb-4" />
              <h3 className="text-xl font-bold">React</h3>
              <p className="text-gray-600">Building interactive user interfaces for web applications.</p>
            </div>
            <div>
              <FaNodeJs className="text-6xl text-green-500 mb-4" />
              <h3 className="text-xl font-bold">Node.js</h3>
              <p className="text-gray-600">Creating scalable and efficient backend systems.</p>
            </div>
            <div>
              <FaAws className="text-6xl text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold">AWS</h3>
              <p className="text-gray-600">Leveraging cloud infrastructure to enhance efficiency.</p>
            </div>
            <div>
              <FaPhp className="text-6xl  text-purple-500 mb-4" />
              <h3 className="text-xl font-bold">PHP</h3>
              <p className="text-gray-600">Creating scalable and efficient backend systems.</p>
            </div>
            <div>
              <FaWordpress className="text-6xl text-gray-500 mb-4" />
              <h3 className="text-xl font-bold">Wordpress</h3>
              <p className="text-gray-600">Providing Efficient solution in minimal cost & time</p>
            </div>
            <div>
              <FaDatabase className="text-6xl text-red-500 mb-4" />
              <h3 className="text-xl font-bold">Database Solutions</h3>
              <p className="text-gray-600">Ensuring secure and reliable data management.</p>
            </div>
            <div>
              <FaFigma className="text-6xl text-blue-200 mb-4" />
              <h3 className="text-xl font-bold">Figma</h3>
              <p className="text-gray-600">Provinding Efficient and interactive Design</p>
            </div>
            <div>
              <FaAndroid className="text-6xl text-green-900 mb-4" />
              <h3 className="text-xl font-bold">Mobile Apps</h3>
              <p className="text-gray-600">Provinding Fast and Efficient Mobile Apps </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <Testimonials
          testimonials={[
            {
              name: "Sarah Williams",
              quote:
                "Techamt helped us modernize our IT infrastructure, improving both efficiency and security. Their team was professional, responsive, and dedicated to delivering top-notch service.",
              company: "GlobalTech Ltd.",
            },
            {
              name: "James Carter",
              quote: "We are beyond impressed with the eCommerce platform Techamt developed for us. It's fast, secure, and scalable—exactly what we needed to grow our business.",
              company: "RetailX",
            },
          ]}
        />
      </section>
      <Footer/>
    </>
  );
};

export default AboutUs;
