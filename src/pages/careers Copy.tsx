// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Head from 'next/head';

// interface Job {
//   title: string;
//   description: string;
// }

// const CareerPage: React.FC = () => {
//   const [jobs, setJobs] = useState<Job[]>([
//     { title: 'Frontend Developer', description: 'Looking for an expert in React.js and Next.js with a keen eye for UI/UX design.' },
//     { title: 'Backend Developer', description: 'Expertise in Node.js, Express, and database management (MongoDB).' },
//   ]);

//   return (
//     <>
//     <Head>
//         <title>Careers</title>
//     </Head>
//       <Navbar />
//       <main className="container mx-auto my-12">
//         <h1 className="text-5xl font-bold mb-8">Careers at Techamt</h1>
//         <p className="text-xl mb-6">Join our team of talented developers, designers, and innovators.</p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {jobs.map((job, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
//               <p>{job.description}</p>
//               <a href="#" className="block mt-4 text-blue-600 hover:underline">Apply Now</a>
//             </div>
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default CareerPage;
