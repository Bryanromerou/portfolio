import React from 'react';
import wellsLogo from '../icons/logos/wellsLogo.png';
import frbsfLogo from '../icons/logos/frbsfLogo.png';

const Experience = () => {
    return (
        <section id="experience">

            <h2> Experience </h2>
            
            <div className = "experience-listing">
                <img src={frbsfLogo} alt="Federal Reserve Bank Of San Francisco" className = "logo"/>
                <div className = "experience-listing-text">
                    <h3>Federal Reserve Bank Of San Francisco</h3>
                    <p>Worked at the Federal Reserve Bank Of San Francisco for 7 months, where I learned how to troubleshoot software and equipment. During my time there the team i was assigned to was in charge of proving currency to the population during a global pandemic. This was able to do, due to consistent communication that we had as a team and the hard work that each of us put in on a daily basis.</p>
                </div>
            </div>
            
            <div className = "experience-listing">
                <img src={wellsLogo} alt="Wells Fargo" className = "logo"/>
                <div className = "experience-listing-text">
                    <h3>Wells Fargo</h3>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi libero quaerat voluptatibus accusamus excepturi unde debitis possimus, voluptas odit, cupiditate quod laudantium tempora, voluptate ad saepe atque nemo optio.</p> */}
                    <p>Worked at Wells Fargo in the Cash Operations for 4 years. Where I learned how to work in a team, meet deadlines, troubleshoot problems and most importantly I learned how to communicate effectively to ensure all task were done. Being that it was my first official Job I took every opportunity given to me and used every experience as a lesson, which gave me an opportunity to move on to the Federal Reserve Bank.</p>

                </div>
            </div>
        
        </section>
    );
}

export default Experience;
