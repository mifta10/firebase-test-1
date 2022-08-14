import React from 'react';
import "./Footer.css";
import { Grid } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaInstagram,
    FaPlay,
    FaGithub,
    FaLinkedin,
    FaLinkedinIn,
  } from "react-icons/fa";
  

const Footer = () => {
    return (
        <div className="footer" id="contact">
          
          <div data-aos="zoom-in">
        <div className="footer__header" >
          <h2>Let's build something great together .</h2>
          <p>
            If you'd like to start a new project, need help with an existing
            project or have any other enquiry, please get in touch.
          </p>
        </div>
        <div className="footer__contact mt-5">
          <Grid container className="grid">
            <Grid lg={4} xs={12} md={6} className="grid__col">
              <EmailIcon></EmailIcon>
              <div className="grid__col__address">
                <div>
                  <h3>EMAIL</h3>
                  <p>wandasetiawari02@gmail.com</p>
                </div>
              </div>
            </Grid>
            <Grid lg={4} xs={12} md={6} className="grid__col">
              <CallIcon></CallIcon>
              <div className="grid__col__address">
                <div>
                  <h3>TELEPHONE</h3>
                  <p>+880 1757110249</p>
                </div>
              </div>
            </Grid>
            <Grid lg={4} xs={12} md={6} className="grid__col">
              <LocationOnIcon></LocationOnIcon>
              <div className="grid__col__address">
                <div>
                  <h3>LOCATION</h3>
                  <p>Jakarta,Indonesia.</p>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="footer__bottom">
          
            <div>
              <small>&copy; Tahmid Khan 2022 | All Rights Reserved</small>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Footer;