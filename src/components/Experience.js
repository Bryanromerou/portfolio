import React from 'react';
import wellsLogo from '../icons/logos/wellsLogo.png';
import frbsfLogo from '../icons/logos/frbsfLogo.png';

const Experience = () => {
    return (
        <section id="experience">
            <img src={frbsfLogo} alt="Federal Reserve Bank Of San Francisco" className = "logo"/>
            <img src={wellsLogo} alt="Wells Fargo" className = "logo"/>
            Experience
        </section>
    );
}

export default Experience;
