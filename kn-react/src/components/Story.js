import "../css/Story.css";
import React, { useState } from "react";
import DeleteSS from "./DeleteSuccessStory";
import EditSS from "./EditSuccessStory";

const Story = (story) => {
    const imageSrc = `https://knowing-narcolepsy-backend.onrender.com/images/${story.img}`; // http://localhost:3001/images/${story.img_name}
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [successStory, setSuccessStory] = useState(story);
    const [showSucessStory, setShowSuccessStory] = useState({ ...story, details: story.details || []});

    //SetState Functions
    const openEditDialog = () => {
        setShowEditDialog(true);
    };
    
    const closeEditDialog = () => {
        setShowEditDialog(false);
    };
    
    const openDeleteDialog = () => {
        setShowDeleteDialog(true);
    };
    
    const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
    };

    const hideSuccessStory = () => {
        setShowSuccessStory(false);
    };

    const editSuccessStory = (newSuccessStory) => {
        setSuccessStory({
            ...newSuccessStory, // Use the newly updated story object.
            narc_details: newSuccessStory.narc_details || [], // Double ensure narc_details is always an array.
        });
        console.log("Rendered SuccessStory Object:", successStory);
    };

    return (
        <>
        { showSucessStory ? (
            <>
                {showDeleteDialog ? ( //DELETE SS
                    <DeleteSS
                        closeDialog={closeDeleteDialog}
                        hideSuccessStory={hideSuccessStory}
                        name={successStory.firstName}
                        _id={successStory._id}
                    />
                ):("")}
                {showEditDialog ? ( //SHOW SS
                    <EditSS
                    closeDialog={closeEditDialog}
                    updateSuccessStory={editSuccessStory}
                    _id={successStory._id}
                    first_name={successStory.first_name}
                    last_name={successStory.last_name}
                    details={successStory.details || []}
                    state={successStory.state}
                    city={successStory.city}
                    img_name={successStory.img_name}
                    />
                ):("")}
                <div id="success-story" className="columns" /* PRINT SS */>
                    <div className="one">
                        <img className="ss-img" src={imageSrc} alt={"image of " + successStory.first_name}/>
                    </div>
                    <div id="details" className="two">
                        <h2>{successStory.first_name} {successStory.last_name}</h2>
                        <section id="change-buttons">
                            <span onClick={openEditDialog}> 
                                {/*eslint-disable-next-line*/}
                                &#9998;
                            </span>
                            <span onClick={openDeleteDialog}>
                                {/*eslint-disable-next-line*/}
                                &#x2715;
                            </span>
                        </section>
                        {successStory.details.map((story, index) => {
                            return (
                                <>
                                <p key={index}>
                                    <b>From: </b> {successStory.city}, {successStory.state} <br/>
                                    <b>Diagnosed: </b>{story.date_diagnosed} <br/>
                                    <b>Type: </b> {story.type_of_narcolepsy} <br/>
                                    <b>Story: </b>{story.user_text}
                                </p>
                                </>
                            )
                        })}
                    </div>
                </div>
            </>
        ):("")}
        </>
    );
};

export default Story;