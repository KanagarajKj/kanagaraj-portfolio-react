import React from 'react'
import { skills } from '../../contantData/constant'

const Skills = () => {
  return (
    <div id="skills">
      <div className="title my-10">
        <h2>Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-10 p-6 bg-white justify-items-center w-full">
        {/* Frontend Skills */}
        <div className="md:col-span-2 lg:col-span-1">
          {skills?.map(
            (skill) =>
              skill?.title === 'Frontend' && (
                <div key={skill.title} className="">
                  <h3 className="text-lg font-semibold mb-2 text-center">
                    {skill.title}
                  </h3>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {skill?.skills?.map((frontend) => (
                      <li
                        className="flex flex-row items-center space-x-2 border py-4 rounded-md justify-center w-40"
                        key={frontend.name}
                      >
                        <img
                          src={frontend?.image}
                          alt={frontend?.name}
                          className="w-6 h-6"
                        />
                        <span>{frontend?.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>

        {/* Backend Skills */}
        <div className="md:col-span-2 lg:col-span-1">
          {skills?.map(
            (skill) =>
              skill?.title === 'Backend' && (
                <div key={skill.title} className="">
                  <h3 className="text-lg font-semibold mb-2 text-center">
                    {skill.title}
                  </h3>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {skill?.skills?.map((backend) => (
                      <li
                        className="flex flex-row items-center space-x-2 border py-4 rounded-md justify-center w-40"
                        key={backend.name}
                      >
                        <img
                          src={backend?.image}
                          alt={backend?.name}
                          className="w-6 h-6"
                        />
                        <span>{backend?.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>

        {/* Others Skills */}
        <div className="md:col-span-2">
          {skills?.map(
            (skill) =>
              skill?.title === 'Others' && (
                <div key={skill.title} className="">
                  <h3 className="text-lg font-semibold mb-2 text-center">
                    {skill.title}
                  </h3>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skill?.skills?.map((other) => (
                      <li
                        className="flex flex-row items-center space-x-2 border py-4 rounded-md justify-center w-40"
                        key={other.name}
                      >
                        <img
                          src={other?.image}
                          alt={other?.name}
                          className="w-6 h-6"
                        />
                        <span>{other?.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills