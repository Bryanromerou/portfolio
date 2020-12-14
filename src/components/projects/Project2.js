import React from 'react';

const Project2 = (props) => {
    return (
        <div className = "project project2">
            <h2>Wayfayer</h2>
            <div className="project-images">
                <div className = "square"/>
                <div className = "square"/>
                <div className = "square"/>
                <div className = "square"/>
            </div>
            <div className="project-description">
                <a href="https://dryft.herokuapp.com/">Check it Out</a>
                <h3>Description</h3>
                <p>
                <i> DRYFT</i> is a travel blogging and social site dedicated to those who are always on the move.
                To signup, users must enter their relevant profile info, as well as select the city in the world they happen to be in at the moment. Optionally, they can also include a profile picture of themselves. Within the app, the user will be able to find and post about any city in the world as well as comment on the posts other users have made.</p>
            </div>
            <div className="tech-used">
                <h3>Technology Used: </h3>
            </div>
        </div>
    );
}

export default Project2;
