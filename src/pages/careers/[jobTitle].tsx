import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
// import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

interface Job {
    title:string,
    description:string,
    location:string,
    responsibilities:string,
    qualifications:string
}

interface JobProp {
    job: Job
}

const JobDetailsPage: React.FC<JobProp> = ({ job }) => {
     const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
        <Head><title>{`careers- ${router.query.jobTitle}`}</title></Head>
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-600 mb-2">{job.location}</p>
      <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
      <p>{job.responsibilities}</p>
      <h3 className="text-xl font-semibold mb-2 mt-4">Qualifications</h3>
      <p>{job.qualifications}</p>

      <button
        onClick={() => router.back()}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Go Back
      </button>
    </div>
  );
}

export const getStaticPaths:GetStaticPaths=async ()=>{
    const Jobs=[
        { title: 'Frontend Developer' },
        { title: 'Backend Developer' },
        { title: 'DevOps Engineer' },
    ]
    const paths=Jobs.map(job=>(
            {params:{jobTitle:job.title.toLowerCase().replace(/ /g,'-')}})
        );
        console.log("paths:" , paths)
    return {
        paths,fallback:true
    }
}


export const getStaticProps: GetStaticProps = (context) => {
    console.log("context",context);
    console.log("contextparams",context.params);
    const {jobTitle}=context.params as {jobTitle:string};
    const jobs = {
    'frontend-developer': {
      title: 'Frontend Developer',
      description: 'React, Next.js, Tailwind CSS',
      location: 'Remote',
      responsibilities: 'Build responsive UIs...',
      qualifications: '2+ years of experience in frontend development...',
    },
    'backend-developer': {
      title: 'Backend Developer',
      description: 'Node.js, Express, MongoDB',
      location: 'New York',
      responsibilities: 'Develop APIs...',
      qualifications: '3+ years of experience in backend development...',
    },
    'devops-engineer': {
      title: 'DevOps Engineer',
      description: 'AWS, Docker, Kubernetes',
      location: 'Remote',
      responsibilities: 'Maintain cloud infrastructure...',
      qualifications: '3+ years of experience in DevOps...',
    },
  };
    console.log(jobs[jobTitle]);
    return {
        props: {job:jobs[jobTitle]}
    }
}

export default JobDetailsPage;