import "../css/LifeList.css";
import Sleep from "../images/treatment/sleep.png";
import Diet from "../images/treatment/diet.png";
import Nap from "../images/treatment/nap.jpg";
import ReachOut from "../images/treatment/reachOut.png";
import FindYourself from "../images/treatment/findYourself.jpg";

const LifeList = () => {
    return (
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
    )
}

export default LifeList;