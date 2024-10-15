import React from "react";
interface HeroProps{
    title:string,
    subtitle:string,
    ctaText:string,
    ctaLink:string
}

const Hero:React.FC<HeroProps>=({title,subtitle,ctaText,ctaLink})=>{
    return(
        <section className="bg-blue-600 text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold mb-4">{title}</h1>
                <p className="text-xl mb-6">{subtitle}</p>
                <a href={ctaLink} className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
                    {ctaText}
                </a>
            </div>
        </section>
    )
}

export default Hero;