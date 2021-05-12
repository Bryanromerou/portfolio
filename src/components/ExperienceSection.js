import React from 'react';
import the_fed from '../icons/logos/frbsfLogoblack.png';
import wells_fargo from '../icons/logos/wellsLogo.png';
import general_assembly from '../icons/logos/gaLogo.png';
import red_cross from '../icons/logos/arclogo.png';

const ExperienceSection = () => {
  return (
    <div className="subsection bottom_border" id="experience">
      <p className="subsection-title">Experience</p>
      <div className = "experience-listing">
        <img src={general_assembly} alt="General Assembly" className="logo-v2"/>
        <p className="listing-title"><span>General Assembly</span> - Software Engineering Immersive Teacher's Assistant [2021-Present]</p>
        <div className="experience-description">
          <p>• Support students in understanding computer programming fundamentals such as object-oriented programming, data structures, and coding best practices.</p>
          <p>• Aid in implementation of full stack technologies and languages and frameworks such as Python, Django, SQL, Express, React, Node, HTML, CSS, JavaScript, Third Party APIs, etc.</p>
          <p>• Guide students in troubleshooting/debugging their full stack applications and API’s.</p>
        </div>
      </div>
      <div className = "experience-listing">
        <img src={red_cross} alt="Red Cross" className="logo-v2"/>
        <p className="listing-title"><span>RedCross</span> - Code4Good Volunteer [2021-Present]</p>
        <div className="experience-description">
          <p>• Partnered with <a href="https://www.intel.com/content/www/us/en/research/overview.html">Intel Labs</a> to build a full stack application that uses Natural Language Processing to analyze and visualize RedCross survey data to better use our volunteering resources.</p>
          <p>• Merged a Pull Request for <i>Red Cross Survey Analytics Dashboard</i> for trial deployment at the Peruvian RedCross.</p>
          <p>• Helped fix issues with React, Express, and MongoDB.</p>
          <p>• Used Jira and Kanban methodologies to keep track of Project’s progress.</p>
        </div>
      </div>
      <div className = "experience-listing">
        <img src={the_fed} alt="Federal Reserve Bank Of San Francisco" className="logo-v2"/>
        <p className="listing-title"><span>Federal Reserve Bank Of San Francisco</span> - Cash Clerk [2020]</p>
        <div className="experience-description">
          <p>• Collaborated in a team environment to accurately fulfill cash orders on a daily basis.</p>
          <p>• Troubleshot problems with internal software and equipment and tested and inspected heavy machinery, ensuring that equipment was ready for the following work week. </p>
        </div>
      </div>
      <div className = "experience-listing">
        <img src={wells_fargo} alt="Wells Fargo" className="logo-v2"/>
        <p className="listing-title"><span>Wells Fargo</span> - Operations Clerk [2016-2020]</p>
        <div className="experience-description">
          <p>• Received and processed cash deposits and provided credit on client accounts.</p>
          <p>• Trained new employees and guided them through their on boarding process.</p>
          <p>• Maintained above 99.97% accuracy and consistently surpassed production set standards.</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
