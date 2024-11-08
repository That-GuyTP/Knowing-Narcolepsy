import "../css/Story.css";
import "../components/SuccessStories";

const Story = (story) => {
    return (
        <div>
            <div className="one">
                <img src="" />
            </div>
            <div className="three">
                <h1>{story.firstName} + {story.lastName}</h1>
                <h2>from {story.city}, {story.state}</h2>
                <p>Diagnosed: {story.diagnosed} Type: {story.type}</p>
                <p>{story.details}</p>
            </div>
        </div>
    );
};

export default Story;