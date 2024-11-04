import {Link} from "react-router-dom";
//import {useState} from "react";
import "../css/Navigation.css";


const Navigation = () => {
    
    /*
    const getWebpage = (page) => {
        return page.keys().map(page);
    };

    const webpage = getWebpage (
        require.context()
    )
    
    const [currentLink, setCurrentLink] = useState(0);
    const setUnclicked = () => {
        setLinkState()
    };
    */

    return (
        <>
        <nav id="nav">
            <ul>
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