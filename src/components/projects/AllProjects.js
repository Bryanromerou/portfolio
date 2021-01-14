import React, { useState } from 'react';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';

const AllProjects = () => {
    const [activeNumber, setActiveNumber] = useState(0);
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const allprojects = [<Project1/>,<Project2/>,<Project3/>];

    const click_1 = (e) =>{
        setActiveNumber(0)
        setShow1(true);
        setShow2(false);
        setShow3(false);
    }
    const click_2 = (e) =>{
        setActiveNumber(1)
        setShow2(true);
        setShow3(false);
        setShow1(false);
    }
    const click_3 = (e) =>{
        setActiveNumber(2)
        setShow3(true);
        setShow2(false);
        setShow1(false);
    }


    return (
        <section className="allprojects" id="projects">

            <div className="project_buttons">
                <p className="selectplease">Please Select a Number:    </p>
                {activeNumber === 0 ? <button onClick = {click_1} className="btn btn-dark" >1</button>: <button onClick = {click_1} className="btn btn-light">1</button>}
                {activeNumber === 1 ? <button onClick = {click_2} className="btn btn-dark">2</button>: <button onClick = {click_2} className="btn btn-light">2</button>}
                {activeNumber === 2 ? <button onClick = {click_3} className="btn btn-dark">3</button>: <button onClick = {click_3} className="btn btn-light">3</button>}
            </div>

            <div className ="projects">
                <div className = {`project ${show1 || "hidden"}`}>
                    {allprojects[0]}
                </div>
                <div className = {`project ${show2 || "hidden"}`}>
                    {allprojects[1]}
                </div>
                <div className = {`project ${show3 || "hidden"}`}>
                    {allprojects[2]}
                </div>
            </div>

        </section>
    );
}

export default AllProjects;
