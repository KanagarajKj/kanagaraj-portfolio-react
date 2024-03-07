import React, {useState} from 'react'
import { education } from '../../contantData/constant'

const Education = () => {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div id="education" className="min-h-screen">
      <div className="title my-10">
        <h2>Education</h2>
      </div>
      {education.map((education, index) => (
        <div
          key={education.id}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className="p-6 bg-white flex items-center justify-center flex-col shadow-md rounded-md mx-auto md:w-2/4 transition-transform duration-800 transform hover:scale-105 border hover:border-green-600"
        >
          <div className="mb-4 text-left">
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
              <h2 className="text-lg font-semibold">{education.degree}</h2>
            </div>
            <p className="text-gray-600">{education.school}</p>
            <p className="text-gray-600">{education.date}</p>
            <p className="text-gray-600">{education.grade}</p>
            <p className="mt-2">
              {hoveredIndex === index
                ? education.desc
                : `${education?.desc?.slice(0, 95)}...`}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education