import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';

const Index = () => {
  return (
    <div className="">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <ToastContainer />
    </div>
  );
}

export default Index