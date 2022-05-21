import React from 'react'
import AboutHeader from './AboutHeader';
import Projects from './Projects';
import Skills from './Skills';

const About = () => {
  return (
    <div className='w-full flex flex-col'>
      <AboutHeader />
      <Skills />
      <Projects />
    </div>
  )
}

export default About;
