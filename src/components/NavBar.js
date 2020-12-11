import React from 'react';
import logo from '../icons/personalLogo.svg';
import { Link } from "react-scroll";

const NavBar = () => {
    return (
            <nav className ="myNav">
                <Link smooth={true} activeClass="active" spy={true} to="aboutme" className="nav-link">About Me</Link>
                <Link smooth={true} activeClass="active" spy={true} to="projects" className="nav-link" >Projects</Link>
                <Link smooth={true} to="aboutme" className="nav-link"><img src={logo} alt="BryanRomero" className="personalLogo"/></Link>
                <Link smooth={true} activeClass="active" spy={true} to="education" className="nav-link" >Education</Link>
                <Link smooth={true} activeClass="active" spy={true} to="experience" className="nav-link" >Experience</Link>
            </nav>
    );
}

export default NavBar;
