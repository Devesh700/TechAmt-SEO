import React from "react";

interface Testimonial {
  name: string;
  quote: string;
  company: string;
}

interface TestimonialProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialProps> = ({ testimonials }) => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
              <p className="text-xl font-bold">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
