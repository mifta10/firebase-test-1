import React, { useState } from "react";
import './Banner.css'
import myResume from "../../../../src/resume/Resume_Of_Mayen_Uddin.pdf"
import Typical from 'react-typical'
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaFileDownload,
  FaDownload,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Particles from 'react-particles-js';

const Banner = () => {

  const [state] = useState({
    title: "I am Wanda Setiawati",
    text:
      "I'm professional Scocial Media Influencer ",
    image: "/images/man-01.png",
    imageTwo: "/images/wand_02.png",
  });
  return (
    <div>
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
    <header className="header">
      <div className="container">
        <div className="row mb-3">
        <div className="col-md-6">
            <div className="banner__img">
              <img className="img-fluid" src={state.imageTwo} alt="man" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  
                  <li>
                    <a href="https://web.facebook.com/profile.php?id=100009477859668">
                      <FaFacebookF className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/MozumderTushar1">
                      <FaTwitter className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/mozumderTushar">
                      <FaGithub className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/mayen-uddin-mozumder-a6659b1b1/">
                      <FaLinkedinIn className="headerIcon" />
                    </a>
                  </li>
                </ul>
                <Typical
                  steps={['I am ', 1000, 'Wanda Setiawati', 1000]}
                  loop={Infinity}
                  wrapper="h1"
                />
                <p className="mb-5 pb-5">{state.text}</p>
                <div className="header__buttons">
                  <Link to={myResume} className="btn btn-outline" target="_blank" download>
                  <FaDownload className="mr-2"/> 
                    My Resume</Link>
                  &nbsp;&nbsp;&nbsp;
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </header>
    </div>
  );
};

export default Banner;
