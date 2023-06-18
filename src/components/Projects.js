import '../App.css'

function Projects() {

    const projects = ["Hotel Rater", "NBA betting app", "Color in Images"];


    return (
        <div className="projects">
            <h1>Oren's Projects:</h1>
            <div>
                {projects.map((project) => (
                    <button key={Date.now()}>{project}</button>
                ))}
            </div>
        </div>
    );
}

export default Projects;
