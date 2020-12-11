import React from 'react';
import AllStack from './AllStack';

const AboutMe = () => {
    return (
        <section id="aboutme">
            {/* <AllStack/> */}
            <div className = "aboutme-content">
                <h3>
                    Hello, I'm <h1 className = "personalName"> Bryan Romero </h1>
                </h3>
            </div>
        </section>
    );
}

export default AboutMe;
