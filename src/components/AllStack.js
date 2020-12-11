import React from 'react';
import cssLogo from '../icons/css.png';
import djangoLogo from '../icons/django.png';
import expressLogo from '../icons/ExpressJS.png';
import htmlLogo from '../icons/html.png';
import jqueryLogo from '../icons/jquery.png';
import javascriptLogo from '../icons/js.png';
import reactLogo from '../icons/react.png';
import nodeLogo from '../icons/nodejs.png';
import mongodbLogo from '../icons/mongodb.png';
import pythonLogo from '../icons/python.webp';


const AllStack = () => {
    return (
        <div className = "logos">
            <img src={cssLogo} alt="CSS" className ="logo css-logo"/>
            <img src={javascriptLogo} alt="Javascript" className ="logo js-logo"/>
            <img src={htmlLogo} alt="HTML" className ="logo html-logo"/>
            <img src={nodeLogo} alt="Node" className ="logo node-logo"/>
            <img src={reactLogo} alt="React" className ="logo react-logo"/>
            <img src={mongodbLogo} alt="Mongo DB" className ="logo mongodb-logo"/>
            <img src={jqueryLogo} alt="JQuery" className ="logo jquery-logo"/>
            <img src={pythonLogo} alt="Python" className ="logo  python-logo"/>
            <img src={djangoLogo} alt="Django" className ="logo  django-logo"/>
            <img src={expressLogo} alt="Express" className ="logo express-logo"/>
        </div>
    );
}

export default AllStack;
