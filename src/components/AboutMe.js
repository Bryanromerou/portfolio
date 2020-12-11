import React from 'react';
import AllStack from './AllStack';

const AboutMe = () => {
    return (
        <section id="aboutme">
            <div className = "aboutme-content">
                <h3>
                    Hello, I'm <h1 className = "personalName"> Bryan Romero </h1>
                </h3>
                <p className = "aboutme-summary">
                I am a Software Engineer with a background in Bank Operations. I hope to use my ability to adapt and meet tight deadlines to immediately make an impact on a team. I am experienced in technologies such as React, Express, Django, MongoDB and PostgreSQL. Being that new technology is always around the corner, I will continue to use my adaptability to learn as much as I can.
                </p>
                <h5>Skilled in technologies such as: </h5>
                <AllStack/>
            </div>
        </section>
    );
}

export default AboutMe;
