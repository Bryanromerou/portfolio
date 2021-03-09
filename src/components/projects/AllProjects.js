import React, { useState } from 'react';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';

const AllProjects = () => {
    const allprojects = [<Project1/>,<Project2/>,<Project3/>];

    return (
        <section className="allprojects" id="projects">

            <div className ="projects">
                {allprojects[0]}
                {allprojects[1]}
                {allprojects[2]}
            </div>

        </section>
    );
}

export default AllProjects;
