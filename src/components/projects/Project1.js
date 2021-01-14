import React from 'react';
import cssLogo from '../../icons/css.png';
import htmlLogo from '../../icons/html.png';
import jsLogo from '../../icons/js.png';
import reactLogo from '../../icons/react.png';
import expressLogo from '../../icons/ExpressJS.png';
import firstImage from '../../icons/project1/1.png';
import secondImage from '../../icons/project1/2.png';
import thirdImage from '../../icons/project1/3.png';
import fourthImage from '../../icons/project1/4.png';

const Project1 = (props) => {
    return (
        <div className = "project project1">
            <h2>Thought Provoking Questions</h2>
            <div className="project-images">
                <img src={firstImage} alt="First" className ="square"/>
                <img src={secondImage} alt="Second" className ="square"/>
                <img src={thirdImage} alt="Third" className ="square"/>
                <img src={fourthImage} alt="Fourth" className ="square"/>
            </div>
            <div className="project-description">
                <a href="https://sleepy-mesa-13114.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Here!</a>
                <a href="https://github.com/Bryanromerou/thought-provoking-questions" target="_blank" rel="noopener noreferrer">Github</a>
                <h3>Description</h3>
                <p>
                    <i>Thought Provoking Questions</i> is an app that welcome those who have questions that there are no solid answers to.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id non molestiae voluptates adipisci culpa, asperiores fugit, pariatur, velit suscipit iure nostrum provident ipsum ipsam quia laboriosam doloribus tempora ut vitae?
                </p>
            </div>
            <h3>Technology Used: </h3>
            <div className="tech-used">
                <img src={cssLogo} alt="CSS" className ="logoProjects"/>
                <img src={htmlLogo} alt="HTML" className ="logoProjects html-logo"/>
                <img src={jsLogo} alt="JavaScript" className ="logoProjects js-logo"/>
                <img src={reactLogo} alt="React" className ="logoProjects react-logo"/>
                <img src={expressLogo} alt="Express" className ="logoProjects express-logo"/>

            </div>
        </div>
    );
}

export default Project1;
