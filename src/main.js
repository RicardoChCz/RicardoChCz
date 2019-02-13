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
            <span className="logo"><NavLink to="/">RicardoChCz</NavLink></span>
            <ul className="menu">
              <li><NavLink to="/about">About me</NavLink></li>
              <li><NavLink to="/portafolio">Portafolio</NavLink></li>
              <li><NavLink to="/skills">Skills</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><a href="http://localhost:8888/blog">Blog</a></li>
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