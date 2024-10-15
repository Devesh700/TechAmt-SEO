import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceProps {
  services: Service[];
}

const Services: React.FC<ServiceProps> = ({ services }) => {
  return (
    <section className="py-20 bg-gray-100" id='services'>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl hover:bg-blue-50"
            >
              <div className="text-4xl mb-4 text-blue-600">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
