import React from 'react'

const Home = () => {
  return (
    <section class="header" id="header">
      <h1 class="header_title">
        HEY, I'M <span>KANAGARAJ</span>
      </h1>
      <p class="header_description">
        I am Frontend Web Developer,Build a Websites & Web Application and
        Passionate about make the world through code.
      </p>
      <button class="project_btn">
        <a href="./assests/images/Kanagaraj Resume - pdf.pdf" target="_blank">
          {' '}
          Resume <i class="fa-solid fa-cloud-arrow-down"></i>
        </a>
      </button>
    </section>
  );
}

export default Home