import "../css/AboutMe.css";
import Navigation from "../components/Navigation";
import Self from "../images/about_me/AboutMe.jpg";

const AboutMe = () => {
    return (
        <>
        <h1>About Me</h1>
        <Navigation />
        <div id="bio" className="div-content">
            <img id="portrait" className="center" src={Self} alt="A portrait of myself"></img>
            <p> I'm Thomas Peterson. A senior at USC majoring in CIS. In December 2022 I was diagnosed with Narcolepsy Type II. My daytime sleep test showed that I entered REM 2/5 times I took a nap
                meaning I was legally a narcoleptic. I would later develop Narcolepsy Type I with mild cataplexy. Since then I've been trying to find the best ways to relieve Narcolepsy symptoms and 
                finding others who also have it.
            </p>
        </div>
        <div className="div-content">
            <h2>Website Purpose</h2>
            <p> During my CSCE 242 class we were assigned a main website project
                which I took as the chance to set up a Narcolepsy website that people could use to find out more information. I noticed that most narcolepsy websites are very bland or strictly informal
                which takes away from someone's desire to learn about narcolepsy. My goal is to create a website that is both interesting to look at and informal. I want people to take away as much as they
                can from the website when they view it.
            </p>
        </div>
        <div className="div-content">
            <h2>My Socials</h2>
            <ul id="socials-list">
                <li>FakeEmail@email.com</li>
                <li>fakeInstagram</li>
                <li>fake twitter</li>
                <li>fake facebook</li>
            </ul>
        </div>
        </>
    );
};

export default AboutMe;