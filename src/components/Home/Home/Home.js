import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Nav from '../Nav/Nav';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <AboutMe />
            <Contact />
            <Footer />
           
        </div>
    );
};

export default Home;