import React, { useEffect } from 'react';
import Nav from '../Home/Nav/Nav';
import myResume from "../../../src/resume/Resume_Of_Mayen_Uddin.pdf"
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Particles from 'react-particles-js';

const Resume = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="bgMain text-white">
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
            <div className="container text-center">
                <Nav />
                <div className="text-center  mt-5" data-aos="zoom-in">
                    <Link to={myResume} className="btn btn-outline" target="_blank" download>
                        <FaDownload className="mr-2" />Resume</Link>
                  &nbsp;&nbsp;&nbsp;
                </div>
                <div >
                    
                    <img style={{ margin: '0 auto', borderRadius: '25px' }} data-aos="zoom-in" src="https://i.ibb.co/J74rsdZ/Resume-of-Tushar-8e5bcd75-3-1.png" className="img-fluid w-50 mt-5" alt="" />
                </div>

            </div>

        </div>
    );
};

export default Resume;