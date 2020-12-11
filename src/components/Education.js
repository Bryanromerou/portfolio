import React from 'react';
import gaLogo from '../icons/logos/gaLogo.png';
import elacLogo from '../icons/logos/elacLogo.png';
import dhLogo from '../icons/logos/dh.png';

const Education = () => {
    return (
        <section id="education">
            <h2>My Education</h2>
            <div className = "education-listing">
                <img src={gaLogo} alt="General Assembly" className = "logo"/>
                <h3>General Assembly</h3>
                <div className = "education-listing-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id praesentium fugiat perferendis quis assumenda, corporis ea architecto placeat nemo recusandae dolorem quaerat magnam ad libero commodi labore aspernatur non.</p>
                </div>
            </div>
            <div className = "education-listing">
                <img src={dhLogo} alt="East Los Angles College" className = "logo"/>
                <h3>California State University of Dominguez Hills</h3>
                <div className = "education-listing-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id praesentium fugiat perferendis quis assumenda, corporis ea architecto placeat nemo recusandae dolorem quaerat magnam ad libero commodi labore aspernatur non.</p>
                </div>
            </div>
            <div className = "education-listing">
                <img src={elacLogo} alt="East Los Angles College" className = "logo"/>
                <h3>East Los Angeles Community College</h3>
                <div className = "education-listing-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id praesentium fugiat perferendis quis assumenda, corporis ea architecto placeat nemo recusandae dolorem quaerat magnam ad libero commodi labore aspernatur non.</p>
                </div>
            </div>
        </section>
    );
}

export default Education;
