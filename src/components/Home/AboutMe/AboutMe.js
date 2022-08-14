import React, { useEffect, useState } from "react";
import ContactMe from "../../ContactMe/ContactMe";
import Nav from "../Nav/Nav";
import './AboutMe.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Particles from 'react-particles-js';


const AboutMe = () => {

  useEffect(() => {
    Aos.init({ duration: 2000})
},[])

  const [header] = useState({
    subHeader: "About Me",
    text:
      "Front End Web Developer",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Wanda Setiawati" },
    { id: 2, title: "Email:", text: "wandasetiawati2@gmail.com" },
    { id: 3, title: "Phone:", text: "+8801757110249" },
    { id: 4, title: "Linkedin", text: "Wanda-a6659b1b1" },
  ]);
  return (
    <div className="about-container">
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
      <div className="about">
      <div className="container">
        <div className="row  h-650 alignCenter" data-aos="fade-right">
          <div className="col-md-6">
            <div className="about__img">
              <img src="/images/wand_04.png" alt="man" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                I'm Wanda Setiawati a Front End Web Developer with experience in building and maintaining responsive websites. Proficient in JavaScript and React JS has professional experience working with Node JS, also skilled in Bootstrap, Cascading Style Sheets (CSS), JavaScript, MySQL, MongoDB, HTML5 & CSS3.
                <br /><br />
                I'm highly passionate about JavaScript-based software development technologies such as: <br />
                - MERN Stack (MongoDB, Express.js, React, Node.js)
              </div>
              <div className="about__info-p2">

              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-md-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutMe;
