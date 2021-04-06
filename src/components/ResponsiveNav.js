import React from 'react';
import { Link } from "react-scroll";
import PersonalLogo from './PersonalLogo';

const ResponsiveNav = ({dark}) => {
  return (
    <header className={`animate${dark?" dark-nav":" light-nav"}`}>
      <h1 className="logo"><Link smooth={true} to="main"><PersonalLogo dark={dark}/></Link></h1>
      <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
      <nav>
        <ul>
          <li><Link smooth={true} activeClass="active" spy={true} to="projects" className="nav-link">Projects</Link></li>
          <li><Link smooth={true} activeClass="active" spy={true} to="experience"  offset={-60} className="nav-link">Experience</Link></li>
          <li><Link smooth={true} activeClass="active" spy={true} to="education" offset={-60} className="nav-link">Education</Link></li>
          <li><Link smooth={true} activeClass="active" spy={true} to="contact" offset={-60} className="nav-link">Contact</Link></li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
}

export default ResponsiveNav;
