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
            //https://knowing-narcolepsy-backend.onrender.com/api/success-stories/ - Render Json
            //http://localhost:3001/api/success-stories/ - Localhost Json
            //https://that-guytp.github.io/csce242/projects/part6/success-stories.json - Orignial JSON file from project. Backup backup/
            console.log("API Response:", response.data);
            setStories(response.data);
        })();
    }, []);
    
    //Update Stories w/o need for Refreshing
    const updateSuccessStories = (newStory) => {
        //setStories((prevStories)=>[...prevStories, newStory]);
        setStories((prevStories) =>
            prevStories.map((story) => story._id == newStory._id ? newStory : story)
        );
    };

    return (
        <div id="success-stories-container" className="div-content">
            <h2>Success Stories</h2>
            <p>Success Stories are stories inputed by users who want to share their experiences with Narcolepsy. The goal of these stories is to help encourage 
                fellow narcoleptics about their life situations as well as offer more personal solutions to symptoms one 
                may suffer from. If you want to add your own Success Story <Link to="/Support" id="info-link">click here</Link></p>
            <div id="success-stories">
                {stories.map((story)=>(
                    <Story 
                        showNewStory={updateSuccessStories}
                        img_name={story.img_name}
                        first_name={story.first_name}
                        last_name={story.last_name}
                        details={story.narc_details || []}
                        state={story.state}
                        city={story.city}
                        _id={story._id}
                    />
                ))}
            </div>
        </div>
    );
}

export default SuccessStories;