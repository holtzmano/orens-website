import '../App.css'
import {Link} from "react-router-dom";
import {useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'


function HomePage() {
    useEffect(() => {
        document.title = "Homepage | Oren Holtzman";
    }, []);
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

            <div className="social-icons">
                <a href="https://www.linkedin.com/in/oren-holtzman-923b04206/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="5x"/>
                </a>
                <a href="https://github.com/holtzmano" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="5x"/>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="5x"/>
                </a>
            </div>

            <div className="developer-credit">Developed by Oren Holtzman</div> {/* Added line */}
        </div>
    );
}

export default HomePage;

