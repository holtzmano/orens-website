import '../App.css'
import {useEffect} from "react";

function CV() {
    useEffect(() => {
        document.title = "CV | Oren Holtzman";
    }, []);
    return (
        <div className="cv">
            <h1>Oren's CV:</h1>
        </div>
    );
}

export default CV;
