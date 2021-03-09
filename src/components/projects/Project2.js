import React from 'react';
import htmlLogo from '../../icons/html.png';
import jsLogo from '../../icons/js.png';
import cssLogo from '../../icons/css.png';
import djangoLogo from '../../icons/django.png';
import postgresLogo from '../../icons/postgresql.png';
import firstImage from '../../icons/project2/1.png';
import secondImage from '../../icons/project2/2.png';
import thirdImage from '../../icons/project2/3.png';

const Project2 = (props) => {
    return (
        <div className = "project project2">
            <h2 className="project-title">Wayfayer</h2>

            <div className="project-images">
                <img src={firstImage} alt="First" className ="square"/>
                <img src={secondImage} alt="Second" className ="square"/>
                <img src={thirdImage} alt="Third" className ="square"/>
            </div>

            <div className="project-description">
                <a href="https://dryft.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Here!</a><br/>
                <a href="https://github.com/jedgodsey/dryft" target="_blank" rel="noopener noreferrer">Github</a>

                <h3>Description</h3>
                <p><span>DRYFT</span> is a travel blogging and social site dedicated to those who are always on the move. To signup, users must enter their relevant profile info, as well as select the city in the world they happen to be in at the moment. Optionally, they can also include a profile picture of themselves. Within the app, the user will be able to find and post about any city in the world as well as comment on the posts other users have made.</p>
            </div>
            
            <h4>Technology Used: </h4>
            
            <div className="tech-used">
                <img src={htmlLogo} alt="HTML" className ="logoProjects html-logo"/>
                <img src={cssLogo} alt="CSS" className ="logoProjects"/>
                <img src={jsLogo} alt="JavaScript" className ="logoProjects js-logo"/>
                <img src={djangoLogo} alt="Django" className ="logoProjects django-logo"/>
                <img src={postgresLogo} alt="PostgreSQL" className ="logoProjects postgres-logo"/>
            </div>
        </div>
    );
}

export default Project2;
