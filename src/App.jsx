import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import  { Routes , Route} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Service from './Service'
import Navbar from './Navbar';
import Footer from './Footer';
import Error from './Error';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='service' element={<Service/>}/>
        <Route path='/*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App