import React from 'react';
import { projects } from '../../contantData/constant';

const Project = () => {
  return (
    <div id="projects" className="mt-10 mb-5">
      <div className="title mb-5">
        <h2>Projects</h2>
      </div>
      <div className="projects-list px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5 gap-y-8">
          {projects.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                <p className="text-gray-700">
                  {card.description.slice(0, 100)}. . .
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
