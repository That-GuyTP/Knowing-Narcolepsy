import {Link} from "react-router-dom";
import {useState} from "react";
import "../css/Navigation.css";
import generateStars from "./Stars";


const Navigation = () => {

    //Nav Toggle Functionality
    const [navDisplay, setNavDisplay] = useState(false);
    const toggleNav = () => {
        setNavDisplay(!navDisplay);
    }

    //Recreate Stars After A Link is Clicked
    const handleLinkClick = () => {
        setTimeout(generateStars, 100);
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
                <li><Link to="/" onClick={handleLinkClick}>Main Page</Link></li>
                <li><Link to="/AboutMe" onClick={handleLinkClick}>About Me</Link></li>
                <li><Link to="/Information" onClick={handleLinkClick}>Information</Link></li>
                <li><Link to="/Treatment" onClick={handleLinkClick}>Treatment</Link></li>
                <li><Link to="/Support" onClick={handleLinkClick}>Support</Link></li>
            </ul> 
        </nav>
        </>
    );
};

export default Navigation;