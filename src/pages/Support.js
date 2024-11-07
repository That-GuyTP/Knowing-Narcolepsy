import "../css/Root.css";
import "../css/Support.css";
import Navigation from "../components/Navigation";
import FormEmail from "../components/FormEmail";
import FormSuccessStory from "../components/FormSuccessStory";
import Resources from "../components/Resources";

const Support = () => {
    return (
        <>
        <h1>Support</h1>
        <Navigation />
        <FormEmail />
        <FormSuccessStory />
        <Resources /> 
        </>
    );
};

export default Support;