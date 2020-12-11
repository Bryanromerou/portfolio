import React from 'react';
import cssLogo from '../../icons/css.png';
import htmlLogo from '../../icons/html.png';
import jsLogo from '../../icons/js.png';

const Project1 = (props) => {
    return (
        <div className = "project project1">
            <h2>Thought Provoking Questions</h2>
            <div className="project-images">
                <div className = "square"/>
                <div className = "square"/>
                <div className = "square"/>
                <div className = "square"/>
            </div>
            <div className="project-description">
                <h3>Description</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id non molestiae voluptates adipisci culpa, asperiores fugit, pariatur, velit suscipit iure nostrum provident ipsum ipsam quia laboriosam doloribus tempora ut vitae?
                </p>
            </div>
            <div className="tech-used">
                <h3>Technology Used: </h3>
                <img src={cssLogo} alt="CSS" className ="logo"/>
                <img src={htmlLogo} alt="HTML" className ="logo html-logo"/>
                <img src={jsLogo} alt="JavaScript" className ="logo js-logo"/>

            </div>
        </div>
    );
}

export default Project1;
