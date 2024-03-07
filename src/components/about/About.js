import React from 'react'
import Typewriter from 'typewriter-effect';
import {Bio} from '../../contantData/constant';

const About = () => {
  return (
    <main
      id="about"
      className="lg:py-20 mt-5 md:mt-24 lg:mt-0 flex flex-col-reverse lg:flex-row about w-full items-center justify-center md:justify-evenly gap-2 px-5 md:px-0"
    >
      <div className="flex flex-col gap-3 w-full md:pl-20 pl-0">
        <h1 className="md:text-5xl text-3xl font-bold">Hello, I'm Kanagaraj</h1>
        <h1 className="md:text-3xl text-2xl font-bold text-amber-400">
          <Typewriter
            options={{
              strings: Bio.roles,
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="text-xl text-justify md:w-4/5 w-full text-light-gray-100 font-normal">
          {Bio.description}
        </p>
      </div>
      <div className="image-section w-full">
        <img
          src={'/HeroImage1.png'}
          alt="Profile_Picture"
          className="md:w-96 w-56 mx-auto rounded-full"
        />
      </div>
    </main>
  );
}

export default About