import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';

const AllProjects = () => {
    const [activeNumber, setActiveNumber] = useState(1);
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
                {activeNumber == 0 ? <button onClick = {click_1} class="btn btn-dark" >1</button>: <button onClick = {click_1} class="btn btn-light">1</button>}
                {activeNumber == 1 ? <button onClick = {click_2} class="btn btn-dark">2</button>: <button onClick = {click_2} class="btn btn-light">2</button>}
                {activeNumber == 2 ? <button onClick = {click_3} class="btn btn-dark">3</button>: <button onClick = {click_3} class="btn btn-light">3</button>}
            </div>

            <div className ="myprojects">
                <Fade opposite when={show1} >
                    <div className = "slider">
                        {allprojects[0]}
                    </div>
                </Fade>
                <Fade opposite when={show2} >
                    <div className = "slider">
                        {allprojects[1]}
                    </div>
                </Fade>
                <Fade opposite when={show3} >
                    <div className = "slider">
                        {allprojects[2]}
                    </div>
                </Fade>
            </div>

        </section>
    );
}

export default AllProjects;
