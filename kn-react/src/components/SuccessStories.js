import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "../css/SuccessStories.css";
import Story from "../components/Story";
import { buildApiUrl } from "../utils/api";

const getStoryCollection = (payload) => {
    if (Array.isArray(payload)) {
        return payload;
    }

    if (Array.isArray(payload?.stories)) {
        return payload.stories;
    }

    if (Array.isArray(payload?.successStories)) {
        return payload.successStories;
    }

    if (Array.isArray(payload?.data)) {
        return payload.data;
    }

    return [];
};

const normalizeDetails = (story) => {
    const details = story?.narc_details ?? story?.details ?? [];

    if (Array.isArray(details)) {
        return details;
    }

    return details ? [details] : [];
};

const normalizeStory = (story = {}) => ({
    ...story,
    _id:
        story._id ??
        story.id ??
        `${story.first_name ?? story.firstName ?? ""}-${story.last_name ?? story.lastName ?? ""}`,
    first_name: story.first_name ?? story.firstName ?? "",
    last_name: story.last_name ?? story.lastName ?? "",
    img_name: story.img_name ?? story.imgName ?? "",
    details: normalizeDetails(story),
    state: story.state ?? "",
    city: story.city ?? "",
});

const SuccessStories = () => {
    const [stories, setStories] = useState([]);
    const [loadError, setLoadError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async() => {
            try {
                const response = await axios.get(buildApiUrl("/api/success-stories/"));
                const normalizedStories = getStoryCollection(response.data).map((story) =>
                    normalizeStory(story)
                );

                setStories(normalizedStories);
                setLoadError("");
            } catch (error) {
                console.error("Unable to load success stories:", error);
                setStories([]);
                setLoadError("Unable to load Success Stories right now.");
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);
    
    //Update Stories w/o need for Refreshing
    const updateSuccessStories = (newStory) => {
        const normalizedStory = normalizeStory(newStory);

        setStories((prevStories) => {
            const hasExistingStory = prevStories.some(
                (story) => String(story._id) === String(normalizedStory._id)
            );

            if (!hasExistingStory) {
                return [normalizedStory, ...prevStories];
            }

            return prevStories.map((story) =>
                String(story._id) === String(normalizedStory._id) ? normalizedStory : story
            );
        });
    };

    return (
        <div id="success-stories-container" className="div-content">
            <h2>Success Stories</h2>
            <p>Success Stories are stories inputed by users who want to share their experiences with Narcolepsy. The goal of these stories is to help encourage 
                fellow narcoleptics about their life situations as well as offer more personal solutions to symptoms one 
                may suffer from. If you want to add your own Success Story <Link to="/Support" id="info-link">click here</Link></p>
            <div id="success-stories">
                {isLoading ? <p>Loading Success Stories...</p> : ""}
                {!isLoading && loadError ? <p>{loadError}</p> : ""}
                {!isLoading && !loadError && stories.length === 0 ? <p>No Success Stories to display yet.</p> : ""}
                {!isLoading && !loadError && stories.map((story, index)=>(
                    <Story 
                        key={`${story._id}-${index}`}
                        showNewStory={updateSuccessStories}
                        img_name={story.img_name}
                        first_name={story.first_name}
                        last_name={story.last_name}
                        details={story.details || []}
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
