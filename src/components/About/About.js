import React, { useEffect } from 'react';
import Nav from '../Home/Nav/Nav';
import './About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Particles from 'react-particles-js';
import Footer from '../Home/Footer/Footer';

const About = () => {
  
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="bgMain"  >
      <Nav />
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
          },
        }}
      />
      <div className="container my-5" data-aos="zoom-in">
        <div className="row mt-5">
          <div className="col-md-4">
            <img src="images/wand_02.png" className='img-fluid img-about' alt="" />
          </div>
          <div className="col-md-8">
            <div className="about-info text-white">
              <h1 >About Me</h1>
              <div className="commonUnderLine mb-4"></div>
              <p >
                Hi there, <br />
                                I'm Mayen Uddin Mozumder Tushar a Front End Web Developer with experience in building and maintaining responsive websites. Proficient in JavaScript and React JS has professional experience working with Node JS, also skilled in Bootstrap, Cascading Style Sheets (CSS), JavaScript, MySQL, MongoDB, HTML5 & CSS3.
                                <br /><br />
                                I'm highly passionate about JavaScript-based software development technologies such as: <br />
                                - MERN Stack (MongoDB, Express.js, React, Node.js)
                            </p>
              <button className="btn btn-secondary">REACT</button>
              <button className="btn btn-secondary ml-2">JAVASCRIPT</button>
              <button className="btn btn-secondary ml-2">NODE</button>
              <button className="btn btn-secondary ml-2">MONGODB</button>
              <button className="btn btn-secondary ml-2">HTML</button>
              <button className="btn btn-secondary ml-2">CSS</button>
            </div>
          </div>
        </div>
       
      </div>
      <Footer/>
    </div>
  );
};

export default About;