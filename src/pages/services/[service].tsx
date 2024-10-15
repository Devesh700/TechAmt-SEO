import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

interface ServiceProps {
    title: string,
    description: string,
    content: string,
}

const service: React.FC<ServiceProps> = ({ title, description, content }) => {
    const router=useRouter();
    console.log(router.query.service)
    const [titleName,setitle]=useState<string>(""+router.query.service)
    return (
        <>
        <Head>
            <title>{titleName}</title>
        </Head>
            <Navbar />
            <main className="container mx-auto my-12">
                <h1 className="text-5xl font-bold mb-8">{title}</h1>
                <p className="text-xl mb-4">{description}</p>
                <div className="prose">{content}</div>
            </main>
            <Footer />
        </>
    );
}

export const getStaticPaths:GetStaticPaths=()=>{
    const services=["web-development","app-development","ecommerce-solutions"];
    const paths=services.map(service=>({params:{service}}));
    return {paths,fallback:false}
}



export const getStaticProps: GetStaticProps = async (context) => {
  const { service } = context.params as { service: string };
  const data = {
    'web-development': {
      title: 'Web Development',
      description: 'Fast, responsive websites built for SEO and performance.',
      content: 'Our web development services focus on creating dynamic, SEO-optimized websites with a user-friendly interface...',
    },
    'app-development': {
      title: 'App Development',
      description: 'Cross-platform mobile apps with stunning UI and performance.',
      content: 'We specialize in mobile app development for both Android and iOS platforms...',
    },
    'ecommerce-solutions': {
      title: 'Ecommerce Solutions',
      description: 'Scalable ecommerce solutions with cutting-edge technology.',
      content: 'Our ecommerce solutions provide seamless user experience with advanced features...',
    },
  };
    console.log(data[service])
  return {
    props: data[service] || {},
  };
};
export default service
