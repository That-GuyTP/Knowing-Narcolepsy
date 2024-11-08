import {Link} from "react-router-dom";
import {useState} from "react";
import "../css/Navigation.css";


const Navigation = () => {
    
    //Nav Toggle Functionality
    const [navDisplay, setNavDisplay] = useState(false);
    const toggleNav = () => {
        setNavDisplay(!navDisplay);
    }

    //HTML Return
    return (
        <>
        <nav id="nav">
            <div id="toggle" onClick={toggleNav}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={navDisplay ? "" : "hide-small"}>
                <li><Link to="/">Main Page</Link></li>
                <li><Link to="/AboutMe">About Me</Link></li>
                <li><Link to="/Information">Information</Link></li>
                <li><Link to="/Treatment">Treatment</Link></li>
                <li><Link to="/Support">Support</Link></li>
            </ul> 
        </nav>
        </>
    );
};

export default Navigation;