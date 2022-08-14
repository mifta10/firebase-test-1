import React, { useEffect, useState } from "react";
import './Services.css'
import {
  FaCircleNotch,
  FaHospital,
  FaCreativeCommonsSampling,
  FaTrain,
  FaFileAudio,
  FaHamburger,
  FaGithub,
  FaExternalLinkSquareAlt,
  FaHome,
  FaAmazon,
  FaAccessibleIcon,
  FaAirbnb,
  FaStore,
  FaSourcetree,
} from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";


const Services = () => {

  useEffect(() => {
    Aos.init({ duration: 2000})
},[])

  const [header] = useState({
    mainHeader: "PROJECTS",
    subHeading: "My Projects",
    text:
      "Some Things I've Built",
  });
  const [state] = useState([
    {
      id: 1,
      icon: <FaSourcetree className="commonIcons" />,
      heading: "MENTEX",
      githubLink:"https://github.com/mozumderTushar/mentex.git",
      liveLink:"https://mentex-5b2ed.web.app/",
      text:
        "A Social Platform For Mentally Disturbed People.",
    },
    {
      id: 2,
      icon: <FaCreativeCommonsSampling className="commonIcons" />,
      heading: "CREATIVE AGENCY",
      githubLink:"https://github.com/mozumderTushar/creative-agency-client.git",
      liveLink:"https://creative-agency-19e08.web.app/",
      text:
        "A Service Selling Website, Where Users Can Get Their Required Services.",
    },
    {
      id: 3,
      icon: <FaHospital className="commonIcons" />,
      heading: "DOCTORS PORTAL",
      githubLink:"https://github.com/mozumderTushar/doctors-portal-v.1-client-master.git",
      liveLink:"https://doctors-portal-2ba18.web.app/",
      text:
        "A Service Giving Website, Where Patients Can Pick The Date And Time And Fix Appointments.",
    },
    {
      id: 4,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "VOLUNTEER NETWORK",
      githubLink:"https://github.com/mozumderTushar/volunteer-network-client.git",
      liveLink:"https://volunteer-network-ccdb0.web.app/",
      text:
        "A Social Servicing Website With Dashboard And Multiple Options Of Volunteer Event.",
    },
    {
      id: 5,
      icon: <FaTrain className="commonIcons" />,
      heading: "TRAVEL GURU",
      githubLink:"https://github.com/mozumderTushar/travel-guru.git", 
      liveLink:"https://travel-guru-c1cf9.web.app/",
      text:
        "A Traveling Website With Multiple Options Of Tourist Places. Users Can Easily Find Their Favorite Places & Hotels.",
    },
    {
      id: 6,
      icon: <FaFileAudio className="commonIcons" />,
      heading: "HARD ROCK",
      githubLink:"https://github.com/mozumderTushar/hard-rock.git",
      liveLink:"https://mozumdertushar.github.io/hard-rock/", 
      text:
        "Hard Rock Boasts An Extensive Library Of Song Lyrics Presented In A Clean And Crisply Designed Website.",
    },
    {
      id: 7,
      icon: <FaHamburger className="commonIcons" />,
      heading: "AWESOME FOOD",
      githubLink:"https://github.com/mozumderTushar/my-awesome-food.git", 
      liveLink:"https://cocky-noyce-d73451.netlify.app/", 
      text:
        "A Food Delivery Website, Where Users Can Pick There Favorite Food And Order The Food",
    },
    {
      id: 8,
      icon: <FaHome className="commonIcons" />,
      heading: "APARTMENT HUNT",
      githubLink:"https://github.com/mozumderTushar/appartment-hunt-client1-final.git", 
      liveLink:"https://appartment-hunt1.web.app/", 
      text:
        "A Apartment Hunt Website, Where Users Can Pick There Apartment And Book Them.",
    },
    {
      id: 9,
      icon: <FaAirbnb className="commonIcons" />,
      heading: "ATHENA DESIGN",
      githubLink:"https://github.com/mozumderTushar/athena-design.git", 
      liveLink:"https://athena-design-9250.netlify.app/", 
      text:
        "A Single Page Responsive Web Page With Attractive And Simple Design",
    },
  ]);
  return (
    <div className="services"> 
      <div className="container">
        <div className="services__header">
          <div className="common" data-aos="zoom-in">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain"  data-aos="zoom-in">
            {state.map((info) => (
              <div className="col-md-4 bgMain text-center">
               <Link to='/projects' style={{textDecoration: 'none'}}>
               <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
               </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
