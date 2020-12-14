import React from 'react';
import cssLogo from '../../icons/css.png';
import htmlLogo from '../../icons/html.png';
import jsLogo from '../../icons/js.png';
import jqueryLogo from '../../icons/jquery.png';

const Project3 = (props) => {
    return (
        <div className = "project project3">
            <h2>Anatomy is awesome!</h2>
            <div className="project-images">
                <div className = "square"/>
                <div className = "square"/>
                <div className = "square"/>
                <div className = "square"/>
            </div>
            <div className="project-description">
                <a href="https://floating-escarpment-82475.herokuapp.com/">Check it Out</a>
                <h3>Description</h3>
                <p>
                    <i> Anatomy is Awesome! </i> is a note taking app that is catered to students that are currently attending Anatomy courses. To start just create a profile and adding your name. When creating a user a body will appear just with bones. Pick one of the 4 Major Body Sections (Head, Arms, Legs, and Torso). Once picking on the body section select the muscle to add on to the body. Once the muscle is on the body the user will be able to make notes about that muscle and save it to the database so that others could see their notes. The goal is the completely fill the Skeleton and to take notes worthy of saving.
                </p>
            </div>
            <div className="tech-used">
                <h3>Technology Used: </h3>
                <img src={cssLogo} alt="CSS" className ="logo"/>
                <img src={htmlLogo} alt="HTML" className ="logo html-logo"/>
                <img src={jsLogo} alt="JavaScript" className ="logo js-logo"/>
                <img src={jqueryLogo} alt="JavaScript" className ="logo js-logo"/>
            </div>
        </div>
    );
}

export default Project3;
