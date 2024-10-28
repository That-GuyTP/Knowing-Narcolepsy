import "../css/Root.css";
import "../css/Treatment.css";
import Sleep from "../images/Treatment_Sleep.png";
import Diet from "../images/Treatment_Diet.png";
import Nap from "../images/Treatment_Nap.jpg";
import ReachOut from "../images/Treatment_ReachOut.png";
import FindYourself from "../images/Treatment_FindYourself.jpg";

const Treatment = () => {
    return (
        <>
        <h1>Treatment</h1>
        <div>
            <h2>Treatment</h2>
            <p>Sadly Narcolepsy does not currently have a cure. While it can be treated, it is a life long condition and will take a lot of patience and time
                to learn how to manage life with. The best recommendation is to visit a trusted Sleep Doctor to assist with providing medical solutions. 
                With narcolepsy still being a less researched disorder there isn't a one-fits-all medicine for the symptoms.
            </p>
            <p>I want to reiterate that isn't medical advice but merely what I've seen and heard myself and others use. For those with cataplexy there are medications like Venlafaxine 
                which is used to help prevent cataplexy attacks. Otherwise the two common approaches are either using medication to help keep you awake or help put you to sleep. Common medications
                used for awake are Lisdexafetamine, Dextroamphetamine, Methylphenidate, & Modafinil. For sleeping solutions the most used are Melatonin, Xywav, and Xyrem.
            </p>
        </div>
        <div id="life-list-container">
            <div>
                <h2>Lifestyle Changes</h2>
                <p>While Narcolespy may be uncurable there are many things you can do without the need of medicine to help manage your conditions:</p>
            </div>
            <div class="life-list">
                <div class="life-list-item">
                    <img src={Sleep} alt="A stock of someone sleeping" class="lifestyle-img"></img>
                    <p><b>Maintain a Regular Sleep Schedule</b> - The best thing someone who suffers from narcolepsy can do is maintain a regular sleep schedule as best they can. Go to sleep at the same time and wake up at the same time. This can help reduce daytime sleepiness and control one's sleep cycle.</p>
                </div>
                <div class="life-list-item">
                    <img src={Diet} alt="A stock of a food table" class="lifestyle-img"></img>
                    <p><b>Eat Healthy and Stay in Shape</b> - Eating proper meals and staying physically healthly both contribute to feeling better overall for an individual. By sticking to a healthier diet, you reduce the chance of these factoring in to worsening sleep. For some narcoleptics, eating big meals can cause them to become drowsy so it's recommended to eat more, smaller meals than fewer, bigger ones.</p>
                </div>
                <div class="life-list-item">
                    <img src={Nap} alt="A stock of someone taking a nap" class="lifestyle-img"></img>
                    <p><b>Take Naps</b> - For some people, taking a quick power nap everyday helps keep their sleep cycle in check. My recommendation would to either choose a 20 minute nap or an 1 1/2 hour nap. These times have been the best recorded durations for naps.</p>
                </div>
                <div class="life-list-item">
                    <img src={ReachOut} alt="A stock of two people talking" class="lifestyle-img"></img>
                    <p><b>Reach Out to Others</b> - As someone who suffers with Narcolepsy I understand that it can be a physical and mental challenge at times. Reaching out and finding others to help you through this process is always a recommended treatment from me.</p>
                </div>
                <div class="life-list-item">
                    <img src={FindYourself} alt="A stock of a mind" class="lifestyle-img"></img>
                    <p><b>Learn About Yourself</b> - Not every narcoleptic suffers from the same symptoms. We each have our own difficulties that we have to work around. Learning how your narcolepsy affects you specifically will help you find ways to treat your symptoms the best.</p>
                </div>
            </div>
        </div>
        <div id="success-stories">
            <h2>Success Stories</h2>
            <p>Success Stories are stories inputed by users who want to share their experiences with Narcolepsy. The goal of these stories is to help encourage fellow narcoleptics about their life situations as well as offer more personal solutions to symptoms one may suffer from. If you want to add your own Success Story <a id="info-link" href="./support.html">click here</a></p>
            <div id="success-stories-container">

            </div>
        </div>
        </>
    );
};

export default Treatment;