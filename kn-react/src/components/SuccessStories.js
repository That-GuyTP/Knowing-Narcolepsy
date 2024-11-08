import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "../css/SuccessStories.css";
import Story from "../components/Story";

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}

const Images = importAll(require.context('../images/treatment/people', false, /\.(png|jpe?g|svg)$/));


const SuccessStories = () => {
    const [stories, setStories] = useState([]);
    useEffect(() => {
        (async() => {
            const response = await axios.get("https://that-guytp.github.io/csce242/projects/part6/success-stories.json");
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
                {stories.map((story)=>(
                    <Story
                        img={Images[story.first_name + ".jpg"]}
                        firstName={story.first_name}
                        lastName={story.last_name}
                        diagnosed={story.date_diagnosed}
                        type={story.type_of_narcolepsy}
                        details={story.user_text}
                        state={story.state}
                        city={story.city}
                    />
                ))}
                
            </div>
        </div>
    );
}

export default SuccessStories;