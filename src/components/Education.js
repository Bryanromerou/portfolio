import React from 'react';
import gaLogo from '../icons/logos/gaLogo.png';
import elacLogo from '../icons/logos/elacLogo.png';
import dhLogo from '../icons/logos/dh.png';

const Education = () => {
    return (
        <section id="education">
            <div className = "education">

            <h2 className="m-5">My Education</h2>
            <div className = "education-listing m-5">
                <img src={gaLogo} alt="General Assembly" className = "logo"/>
                <h3>General Assembly</h3>
                <div className = "education-listing-text">
                    <p>Attended a Software Engineering Immersive Program, where I completed over 420 hours of training. This training included: learning how to create backend API, creating a full stack application, and using frameworks/libraries. In this program we were made to work in groups so we had to use tools as Github and Trello to comunicate and get Projects turned in.</p>
                </div>
            </div>
            <div className = "education-listing m-5">
                <img src={dhLogo} alt="East Los Angles College" className = "logo"/>
                <h3>California State University of Dominguez Hills</h3>
                <div className = "education-listing-text">
                    <p>Currently Attending CSUDH and am 1 year away from graduating with a Bachelor's in Computer Science. Where I passed classes such as "Data Structures" and "Computer Ethics".</p>
                </div>
            </div>
            <div className = "education-listing m-5">
                <img src={elacLogo} alt="East Los Angles College" className = "logo"/>
                <h3>East Los Angeles Community College</h3>
                <div className = "education-listing-text">
                    <p>Attended East Los Angeles Community College, for 3 years where I completed my General Education Requirements which encompasses many basic skills such as English. Also took some more Intermediate classes such as Physics, Calculus I/II, and Discrete Mathematics</p>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Education;
