import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "../css/SuccessStories.css";
import Story from "../components/Story";


const SuccessStories = () => {
    const [stories, setStories] = useState([]);
    useEffect(() => {
        (async() => {
            const response = await axios.get("https://that-guytp.github.io/kn-react/src/json/success-stories.json");
            setStories(response.data);
        })();
    }, []);
    
    return (
        <div id="success-stories-container" className="div-content">
            <h2>Success Stories</h2>
            <p>Success Stories are stories inputed by users who want to share their experiences with Narcolepsy. The goal of these stories is to help encourage 
                fellow narcoleptics about their life situations as well as offer more personal solutions to symptoms one 
                may suffer from. If you want to add your own Success Story <Link to="/Support" id="info-link">click here</Link></p>
            <div id="success-stories">
                <Story
                    img={stories.img_name + stories.first_name + ".jpg"}
                    firstName={stories.first_name}
                    lastName={stories.last_name}
                    diagnosed={stories.date_diagnosed}
                    type={stories.type_of_narcolepsy}
                    details={stories.user_text}
                    state={stories.state}
                    city={stories.city}
                />
            </div>
        </div>
    );
}

export default SuccessStories;