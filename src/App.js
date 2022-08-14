import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Blog from "./components/Blog/Blog";
import NotFound from "./components/NotFound/NotFound";
import Resume from "./components/Resume/Resume";
import About from "./components/About/About";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Home/Footer/Footer";
import Nav from "./components/Home/Nav/Nav";

function App() {

  return (
    <div> 
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
            <Footer/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Nav/>
            <ContactMe />
            <Footer/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
