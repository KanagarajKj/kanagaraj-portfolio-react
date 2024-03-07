import React from 'react';

const Experience = () => {
  return (
    <div className="min-h-screen text-center py-5" id="experience">
      <div className="title my-10">
        <h2>Work Experience</h2>
      </div>
      <div className="p-6 bg-white flex item-center justify-center flex-col shadow-md rounded-md mx-auto md:w-2/4">
        <div className="mb-4 text-left">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
            <h2 className="text-lg font-semibold">Software Engineer</h2>
          </div>
          <p className="text-gray-600">
            Innovation Incubator Advisory Pvt Ltd & Cybersapient Technologies
            Pvt Ltd | Oct 2022 - Aug 2023
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>● Developed and maintained web applications using React.js.</li>
            <li>
              ● Extensive experience in developing and maintaining e-commerce
              websites.
            </li>
            <li>
              ● Implemented responsive and user-friendly interfaces using
              React.js, Next.js with Tailwind CSS and for state management using
              React Redux Toolikt.
            </li>
            <li>
              ● Proficient in both frontend and backend development, ensuring
              seamless end-to-end functionality and involving MongoDB and MySQL
              databases.
            </li>
          </ul>
        </div>

        <div className="mb-4 text-left">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
            <h2 className="text-lg font-semibold">Junior Web App Developer</h2>
          </div>
          <p className="text-gray-600">
            Blaze Web Services Pvt Ltd | Sep 2023 - Present
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              ● Developed and maintained a Crypto Exchange App extensively
              utilizing Cybrid APIs.
            </li>
            <li>
              ● Implemented responsive and user-friendly interfaces using
              React.js with Bootstrap, Next.js with Chakra UI and State
              management using React Redux Toolkit & React Query.
            </li>
            <li>
              ● Proficient in both frontend and backend development, ensuring
              seamless end-to-end functionality and involving MySQL and
              PostgreSQL databases.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
