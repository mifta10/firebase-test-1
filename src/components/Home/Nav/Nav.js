import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Nav.css'

const Nav = () => {

  return (
    <div className="bgMain">
     <div className="container">
     <nav className="navbar navbar-expand-lg navbar-dark bg-transparent text-white" >
        <a className="navbar-brand" href="#"><span className="wanda">Wanda</span>  <span className="setiawati">Setiawati</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>

        </div>
      </nav>
     </div>
    </div>
  );
};

export default Nav;
