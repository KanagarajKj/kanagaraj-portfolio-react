import React from 'react'

import htmlLogo from '../assests/images/html-5.png'
import cssLogo from '../assests/images/css-3.png';
import jsLogo from '../assests/images/js.png';
import reactLogo from '../assests/images/react.png';

const About = () => {
  return (
    <section class="about_me" id="about_me">
      <div class="about_me_heading">
        <h2 class="title">ABOUT ME</h2>
        <p class="about_me_description">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
      </div>
      <div class="about_me_section">
        <div class="know_me">
          <h2>I'm Kanagaraj and I'm a</h2>
          <p>
            Front End Developer with proficiencies in HTML, CSS, and JavaScript,
            React JS.I have building the Frontend of Websites and Web
            Applications that leads to the sucess of overall products. Check out
            some of my work in the Projects section.
          </p>
          <p>
            Learned Web Development skill from Skill Safari Alchemyst Program..
            I am always eager to add new technologies to my skillset. Being a
            developer is my calling and my passion.
          </p>
        </div>
        <div class="my_skill">
          <h2>My Skills</h2>
          <ul class="skills">
            <li>
              <img src={htmlLogo} alt="HTML Icon" />
              <span>HTML 5</span>
            </li>
            <li>
              <img src={cssLogo} alt="HTML Icon" />
              <span>CSS 3</span>
            </li>
            <li>
              <img src={jsLogo} alt="HTML Icon" />
              <span>JavaScript</span>
            </li>
            <li>
              <img src={reactLogo} alt="HTML Icon" />
              <span>React JS</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About