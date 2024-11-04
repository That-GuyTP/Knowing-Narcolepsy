import "../css/MainPage.css";
import "../css/Root.css";
import Map from "../images/mainpage/USNarcMap.png";
import Navigation from "../components/Navigation";

const MainPage = () => {
    return (
        <>
        <div id="div-mainpage">
            <meta charset="UTF-8"></meta>
            <h1>Knowing Nar&ensp;&ensp;olepsy</h1>
            <Navigation />
            <h1 id="quote"><i>"Narcolepsy is a medical disorder that impacts 1 in approximately 2,000 people in the United States of America."</i> - Narcolepsy Network</h1>
            <div id="div-maincontent">
                <div id="div-intro">
                    <h2>What is Narcolepsy?</h2>
                    <p>Narcolepsy is a neurological disorder that affects an individual's ability to control their sleep cycle. People who have narcolepsy often have 
                        excessive daytime sleepiness and sudden episodes of falling asleep during the day. Sadly narcolepsy goes mostly undiagnosed as it's often thought
                        to be depression or bad sleeping habits.
                    </p>
                </div>
                <div id="div-img">
                    <section id="img-intro-container">
                        <img id="img-intro" src={Map} alt="Narcolepstics around US"></img>
                        <p id="copyright">Copyright - https://julieflygare.com/narcolepsy-not-alone-gallery-map/</p>
                    </section>
                </div>
            </div>
            <section id="moon" class="crescent-moon"></section>
        </div>
        </> 
    );
};

export default MainPage;