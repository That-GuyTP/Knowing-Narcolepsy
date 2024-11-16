import "../css/Story.css";

const Story = (story) => {
    const imageSrc = `https://knowing-narcolepsy-backend.onrender.com/images/people/${story.img_name}`;
    return (
        <>
        <div id="success-story" className="columns">
            <div className="one">
                <img className="ss-img" src={imageSrc} alt={"image of " + story.firstName}/>
            </div>
            <div id="details" className="two">
                <h2>{story.firstName} {story.lastName}</h2>
                {story.details.map((detail, index) => {
                    return (
                        <>
                        <p key={index}>
                            <b>From:</b> {story.city}, {story.state} <br/>
                            <b>Diagnosed: </b>{detail.date_diagnosed} <br/>
                            <b>Type: </b> {detail.type_of_narcolepsy} <br/>
                            <b>Story: </b>{detail.user_text}
                        </p>
                        </>
                    )
                })}
            </div>
        </div>
        </>
    );
};

export default Story;