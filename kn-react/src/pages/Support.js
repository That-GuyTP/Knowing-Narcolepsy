import "../css/Root.css";
import "../css/Support.css";
import Navigation from "../components/Navigation";
import FormEmail from "../components/FormEmail";
import FormSuccessStory from "../components/FormSuccessStory";
import Resources from "../components/Resources";
import { useState } from "react";

const Support = () => {
    const [stories, setStories] = useState([]);

    const updateSuccessStories = (newStory) => {
        setStories((prevStories) => [...prevStories, newStory]);
    };

    return (
        <>
        <h1>Support</h1>
        <Navigation />
        <FormEmail />
        <FormSuccessStory showNewStory={updateSuccessStories} />
        <Resources /> 
        </>
    );
};

export default Support;