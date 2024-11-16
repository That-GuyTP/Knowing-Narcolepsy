import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "../css/SuccessStories.css";
import Story from "../components/Story";

const SuccessStories = () => {
    const [stories, setStories] = useState([]);
    useEffect(() => {
        (async() => {
            const response = await axios.get("https://knowing-narcolepsy-backend.onrender.com/api/success-stories/");
            //https://that-guytp.github.io/csce242/projects/part6/success-stories.json
            //http://localhost:3000/api/success-stories/
            setStories(response.data);
        })();
    }, []);
    
    //Update Stories w/o need for Refreshing
    const updateSuccessStories = (story) => {
        setStories((story)=>[...stories, story]);
    }

    return (
        <div id="success-stories-container" className="div-content">
            <h2>Success Stories</h2>
            <p>Success Stories are stories inputed by users who want to share their experiences with Narcolepsy. The goal of these stories is to help encourage 
                fellow narcoleptics about their life situations as well as offer more personal solutions to symptoms one 
                may suffer from. If you want to add your own Success Story <Link to="/Support" id="info-link">click here</Link></p>
            <div id="success-stories">
                {stories.map((story)=>(
                    <Story showNewStory={updateSuccessStories}
                        img={story.img_name}
                        firstName={story.first_name}
                        lastName={story.last_name}
                        details={story.narc_details}
                        state={story.state}
                        city={story.city}
                    />
                ))}
            </div>
        </div>
    );
}

export default SuccessStories;