import React from 'react';
import gaLogo from '../icons/logos/gaLogo.png';
import elacLogo from '../icons/logos/elacLogo.png';
import dhLogo from '../icons/logos/dh.png';

const Education = () => {
    return (
        <section id="education">
            <img src={gaLogo} alt="General Assembly" className = "logo"/>
            <img src={elacLogo} alt="East Los Angles College" className = "logo"/>
            <img src={dhLogo} alt="East Los Angles College" className = "logo"/>
            My Education
        </section>
    );
}

export default Education;
