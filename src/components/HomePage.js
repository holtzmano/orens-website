import '../App.css'
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <div className="homepage">
            <h1>Welcome to Oren's Website</h1>
            <h2>Click on one of the buttons that you're interested in:</h2>
            <Link to="/about"> <button className="button">About</button> </Link>
            <a href={`${process.env.PUBLIC_URL}/Oren_Holtzman_CV.pdf`} target="_blank" rel="noopener noreferrer">
                <button className="button">CV</button>
            </a>
            <Link to="/projects"> <button className="button">Projects</button> </Link>
            <Link to="/feedback"> <button className="button">Feedback</button> </Link>
        </div>
    );
}

export default HomePage;




