import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./views/home/home";
import About from "./views/about/about";
import Contact from "./views/contact/contact";
import Portafolio from "./views/portafolio/portafolio";
import Skills from "./views/skills/skills";
import Social from "./views/components/social"


import "./styles/main.scss"

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="header">
            <span className="logo">
              <NavLink to="/">
                <span className="icon-home"></span>
                <span className="tag">RicardoChCz</span>
              </NavLink>
            </span>
            <ul className="menu">
              <li>
                <NavLink to="/about">About me</NavLink>
              </li>
              <li>
                <NavLink to="/skills">Skills</NavLink>
              </li>
              <li>
                <NavLink to="/portafolio">Portafolio</NavLink>
              </li>
              <li>
                <a href="http://localhost:8888/blog">Blog</a>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/portafolio" component={Portafolio}/>
            <Route path="/contact" component={Contact}/>
          </div>

          <Social/>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;


/*
              <li>
                <NavLink to="/about">
                  <span className="icon-user"></span> 
                  <span className="tag"> About me</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/skills">
                  <span className="icon-gears"></span> 
                  <span className="tag"> Skills </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/portafolio">
                  <span className="icon-suitcase"></span> 
                  <span className="tag"> Portafolio</span>
                </NavLink>
              </li>
              <li>
                <a href="http://localhost:8888/blog">
                  <span className="icon-newspaper-o"></span> 
                  <span className="tag"> Blog </span>
                </a>
              </li>
              <li>
                <NavLink to="/contact">
                  <span className="icon-phone"></span> 
                  <span className="tag"> Contact </span>
                </NavLink>
              </li>


*/