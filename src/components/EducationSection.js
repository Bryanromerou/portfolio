import React from 'react';
import dominguez_hills from '../icons/logos/dh.png';
import elac from '../icons/logos/elacLogo.png';
import general_assembly from '../icons/logos/gaLogo.png';


const EducationSection = () => {
  return (
    <div className="subsection left_border" id="education">
      <p className="subsection-title">Education</p>
      <div className = "education-listing">
        <img src={general_assembly} alt="General Assembly" className="logo-v2"/>
        <p className="listing-title"><span>General Assembly</span> - Software Engineering Immersive [December 2020]</p>
      </div>
      <div className = "education-listing">
        <img src={dominguez_hills} alt="California State University of Dominguez Hills" className="logo-v2"/>
        <p className="listing-title"><span>California State University of Dominguez Hills</span> - Bachelor of Computer Science [December 2021]</p>
      </div>
    </div>
  );
}

export default EducationSection;
