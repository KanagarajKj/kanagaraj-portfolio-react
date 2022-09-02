import React from 'react'

import project1 from '../assests/images/img-1.png';
import project2 from '../assests/images/img-2.png';
import project3 from '../assests/images/img-3.png';
import project4 from '../assests/images/img-4.png';
import project5 from '../assests/images/img-5.png';
import project6 from '../assests/images/img-6.png';
import project7 from '../assests/images/img-7.png';
import project8 from '../assests/images/img-8.png';
import project9 from '../assests/images/img-9.png';
import project10 from '../assests/images/img-10.png';
import project11 from '../assests/images/img-11.png';
import project12 from '../assests/images/img-12.png';
import project13 from '../assests/images/img-13.png';

const Projects = () => {
  return (
    <section class="projects" id="projects">
      <div>
        <h2 class="title">PROJECTS</h2>
      </div>
      <div class="project">
        <ul class="project_container">
          <li>
            <img src={project7} alt="Live Weather App" />
            <a href="https://weather-app-kj.netlify.app/" target="_blank">
              Live Weather App
            </a>
          </li>


          <li>
            <img src={project11} alt="Grocery list App" />
            <a
              href="https://react-grocery-list-app-kj.netlify.app/"
              target="_blank"
            >
              Grocery List App
            </a>
          </li>


          <li>
            <img src={project12} alt="Web Page" />
            <a
              href="https://interview-project-kanagaraj.netlify.app/"
              target="_blank"
            >
              Web Page
            </a>
          </li>


          <li>
            <img src={project13} alt="Menu" />
            <a href="https://menu-course-kj.netlify.app/" target="_blank">
              Nav Menu
            </a>
          </li>
          <li>
            <img src={project3} alt="Expense Tracker App" />
            <a href="https://expense-tracker-kj.netlify.app/" target="_blank">
              Expense Tracker
            </a>
          </li>
          <li>
            <img src={project4} alt="Form Validation" />
            <a href="https://from-kj.netlify.app/" target="_blank">
              Form Validation
            </a>
          </li>
          <li>
            <img src={project10} alt="RPS Game" />
            <a href="https://rps-kj.netlify.app/" target="_blank">
              ROCK PAPER SCISSOR Game
            </a>
          </li>
          <li>
            <img src={project1} alt="Chat App" />
            <a
              href="https://kanagaraj-mobile-chat.netlify.app/"
              target="_blank"
            >
              Chat App
            </a>
          </li>
          <li>
            <img src={project2} alt="Landing page" />
            <a
              href="https://kanagaraj-clipboard-landing-page.netlify.app/"
              target="_blank"
            >
              Clipboard Landing Page
            </a>
          </li>

          <li>
            <img src={project5} alt="" />
            <a
              href="https://kanagaraj-fylo-landing-page-fem.netlify.app/#"
              target="_blank"
            >
              Fylo Landing Page
            </a>
          </li>
          <li>
            <img src={project6} alt="" />
            <a
              href="https://kanagaraj-testimonials-grid-section-fem.netlify.app/"
              target="_blank"
            >
              Testimonial Grid Section
            </a>
          </li>
          <li>
            <img src={project9} alt="" />
            <a
              href="https://huddle-landing-page-kj.netlify.app/"
              target="_blank"
            >
              Huddle Landing Page
            </a>
          </li>
          
        </ul>
      </div>
    </section>
  );
}

export default Projects