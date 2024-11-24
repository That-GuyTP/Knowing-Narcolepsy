import "../css/Story.css";
import React, { useState } from "react";
import DeleteSS from "./DeleteSuccessStory";
import EditSS from "./EditSuccessStory";

const Story = (story) => {
    const imageSrc = `http://localhost:3001/images/${story.img_name}`; // https://knowing-narcolepsy-backend.onrender.com/images/${story.img}
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [successStory, setSuccessStory] = useState(story);
    const [showSucessStory, setShowSuccessStory] = useState(true);

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
      }

      const editSuccessStory = (newSuccessStory) => {
        setSuccessStory(newSuccessStory);
      }

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
                    first_name={successStory.firstName}
                    last_name={successStory.lastName}
                    details={successStory.details || []}
                    state={successStory.state}
                    city={successStory.city}
                    img_name={successStory.img_name}
                    />
                ):("")}
                <div id="success-story" className="columns" /* PRINT SS */>
                    <div className="one">
                        <img className="ss-img" src={imageSrc} alt={"image of " + story.firstName}/>
                    </div>
                    <div id="details" className="two">
                        <h2>{story.firstName} {story.lastName}</h2>
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
                        {story.details.map((detail, index) => {
                            return (
                                <>
                                <p key={index}>
                                    <b>From: </b> {story.city}, {story.state} <br/>
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
        ):("")}
        </>
    );
};

export default Story;