import React from "react";

const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">Project Title 1</h3>
            <p className="text-gray-700">Brief description of the project goes here.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">Project Title 2</h3>
            <p className="text-gray-700">Brief description of the project goes here.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">Project Title 3</h3>
            <p className="text-gray-700">Brief description of the project goes here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
