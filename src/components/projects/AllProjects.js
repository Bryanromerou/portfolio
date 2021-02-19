import React, { useState } from 'react';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';

const AllProjects = () => {
    const allprojects = [<Project1/>,<Project2/>,<Project3/>];

    return (
        <section className="allprojects" id="projects">

            <div className ="projects">
                <div className = {`project`}>
                    {allprojects[0]}
                </div>
                <div className = {`project`}>
                    {allprojects[1]}
                </div>
                <div className = {`project`}>
                    {allprojects[2]}
                </div>
            </div>

        </section>
    );
}

export default AllProjects;
