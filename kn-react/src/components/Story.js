import "../css/Story.css";
import "../components/SuccessStories";

const Story = (story) => {
    return (
        <div>
            <div className="one">
                <img src={story.img} alt={"image of " + story.firstName}/>
            </div>
            <div className="three">
                <h2>{story.firstName} {story.lastName}</h2>
                <h3>from {story.city}, {story.state}</h3>
                <p>Diagnosed: {story.diagnosed} Type: {story.type}</p>
                <p>{story.details}</p>
            </div>
        </div>
    );
};

export default Story;