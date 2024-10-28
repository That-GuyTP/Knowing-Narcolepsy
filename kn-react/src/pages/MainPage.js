import "../css/MainPage.css";
import "../css/Root.css";
import Map from "../images/UsNarcMap.png";
import React, { useEffect } from 'react';
//import { generateStars } from "../scripts/Stars.js";

const MainPage = () => {
    /*
    useEffect(() => {
        generateStars();  // Call the function to generate stars
    }, []);
    */
    
    return (
        <>
        <meta charset="UTF-8"></meta>
        <h1>Knowing Nar&ensp;&ensp;olepsy</h1>
        <section id="moon" class="crescent-moon"></section>
        <section id="hill-night" class="hill"></section>
        <h1 id="quote"><i>"Narcolepsy is a medical disorder that impacts 1 in approximately 2,000 people in the United States of America."</i> - Narcolepsy Network</h1>
        <div id="div-intro">
            <h2>What is Narcolepsy?</h2>
            <p>Narcolepsy is a neurological disorder that affects an individual's ability to control their sleep cycle. People who have narcolepsy often have 
                excessive daytime sleepiness and sudden episodes of falling asleep during the day. Sadly narcolepsy goes mostly undiagnosed as it's often thought
                to be depression or bad sleeping habits.
            </p>
        </div>
        <div id="div-img">
            <img id="img-intro" src={Map} alt="Narcolepstics around US"></img>
            <p id="copyright">Copyright - https://julieflygare.com/narcolepsy-not-alone-gallery-map/</p>
        </div>    
        </> 
    );
};

export default MainPage;