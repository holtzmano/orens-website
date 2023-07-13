import React, { useState } from "react";
import '../App.css'

function Projects() {
    const projects = {
        "Hotel Rater": {
            subjects: ["Python", "NLP", "Deep Learning"],
            image: "logo192.png",  // Update with the actual paths to your images
        },
        "NBA betting app": {
            subjects: ["JavaScript", "React"],
            image: "logo192.png",
        },
        "Star Wars Pacman": {
            subjects: ["C++"],
            image: "logo192.png",
        },
        "Digit Recognition": {
            subjects: ["Python", "NLP", "Deep Learning", "Machine Learning"],
            image: "logo192.png",  // Update with the actual paths to your images
        },
        "Appointment Registration": {
            subjects: ["Python"],
            image: "logo192.png",
        },
        "Color Completion in Images": {
            subjects: ["Python"],
            image: "logo192.png",
        },
        "Hulda Game": {
            subjects: ["C++"],
            image: "logo192.png"
        }
    };

    const [selectedSubject, setSelectedSubject] = useState(''); // Default to no subject

    const subjects = Array.from(new Set(Object.values(projects).map(project => project.subjects).flat()));

    const filteredProjects = Object.entries(projects).filter(([project, details]) => selectedSubject === '' || details.subjects.includes(selectedSubject));

    return (
        <div className="projects">
            <h1>Oren's Projects:</h1>
            <h3>Select Subject:</h3>
            <select onChange={(e) => setSelectedSubject(e.target.value)}>
                <option value="">All</option>
                {subjects.map((subject, index) => (
                    <option key={index} value={subject}>{subject}</option>
                ))}
            </select>
            <div>
                {filteredProjects.map(([project, details], index) => (
                    <div key={index} style={{ margin: '10px' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px'
                        }}>
                            <img src={`${process.env.PUBLIC_URL}/${details.image}`} alt={project} width="100" />
                            <button style={{
                                background: '#4CAF50', /* Green background */
                                border: 'none',  /* Remove border */
                                color: 'white',  /* White text */
                                padding: '15px 32px',  /* Some padding */
                                textAlign: 'center',  /* Center the text */
                                textDecoration: 'none',  /* Remove underline */
                                display: 'inline-block',
                                fontSize: '16px',  /* Increase font size */
                                margin: '4px 2px',  /* Add some margin */
                                cursor: 'pointer',  /* Add a mouse pointer on hover */
                                borderRadius: '12px'  /* Rounded corners */
                            }}>{project}</button>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
}

export default Projects;
