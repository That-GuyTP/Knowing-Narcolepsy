import "../css/Story.css";
import React, { useState } from "react";
import DeleteSS from "./DeleteSuccessStory";
import EditSS from "./EditSuccessStory";
import { buildImageUrl } from "../utils/api";

const normalizeDetails = (story) => {
    const details = story?.details ?? story?.narc_details ?? [];

    if (Array.isArray(details)) {
        return details;
    }

    return details ? [details] : [];
};

const normalizeStory = (story = {}) => ({
    ...story,
    first_name: story.first_name ?? story.firstName ?? "",
    last_name: story.last_name ?? story.lastName ?? "",
    img_name: story.img_name ?? story.imgName ?? "",
    details: normalizeDetails(story),
    city: story.city ?? "",
    state: story.state ?? "",
});

const Story = (story) => {
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [successStory, setSuccessStory] = useState(normalizeStory(story));
    const [showSuccessStory, setShowSuccessStory] = useState(true);
    const imageSrc = buildImageUrl(successStory.img_name);

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
        setSuccessStory((previousStory) =>
            normalizeStory({
                ...previousStory,
                ...newSuccessStory,
            })
        );
    };

    return (
        <>
        { showSuccessStory ? (
            <>
                {showDeleteDialog ? ( //DELETE SS
                    <DeleteSS
                        closeDialog={closeDeleteDialog}
                        hideSuccessStory={hideSuccessStory}
                        name={successStory.first_name}
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
                        {successStory.details.length === 0 ? <p>No details added yet.</p> : ""}
                        {successStory.details.map((detail, index) => {
                            return (
                                <p key={`${successStory._id}-${index}`}>
                                    <b>From: </b> {successStory.city}, {successStory.state} <br/>
                                    <b>Diagnosed: </b>{detail.date_diagnosed} <br/>
                                    <b>Type: </b> {detail.type_of_narcolepsy} <br/>
                                    <b>Story: </b>{detail.user_text}
                                </p>
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
