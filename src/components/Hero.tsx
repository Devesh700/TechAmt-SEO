import React from "react";
import SpinningWebCircle from "./SpinningWebCircle";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path-to-your-hero-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50">
        {/* <SpinningWebCircle/> */}
      </div>
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">{title}</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">{subtitle}</p>
        <a
          href={"#services"}
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}

export default Hero;
