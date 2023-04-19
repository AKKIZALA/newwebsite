import React from 'react'
import web from './img/two man rocate.jpg'
import { NavLink } from 'react-router-dom';
import Comman from './Comman';

const Home = () => {
  return (
    <>
    <Comman 
    name={"Grow your business with"}
    imgsrc={web}
    title={'Akki Zala'}
    visit={"/service"}
    btnname={"Get Started"}
    />
    </>
  )
};

export default Home