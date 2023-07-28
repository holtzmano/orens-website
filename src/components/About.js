import '../App.css'
import {Link} from "react-router-dom";
import React from "react";
import { useState, useEffect } from 'react';


function About() {
    useEffect(() => {
        document.title = "About | Oren Holtzman";
    }, []);

    return (
        <div className="about">
            <Link to="/">
                <button className="button back-button">Back to Main Menu</button>
            </Link>
            <h1>Contact Details:</h1>
            <h3>Name: Oren Holtzman </h3>
            <h3>Phone Number: 0546439229</h3>
            <h3>Email: holtzmanoren99@gmail.com</h3>
        </div>

    );
}

export default About;
