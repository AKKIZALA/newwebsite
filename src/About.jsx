import React from 'react';
import Comman from './Comman';
import Aboutimg from './img/about.jpg';

const About = () => {
  return (
    <>
      <Comman 
    name="Say Hii to our "
    imgsrc={Aboutimg}
    title='Team'
    btn="Contect"
    visit="/contact"
    btnname="Contact"
    />
    </>
  )
}

export default About