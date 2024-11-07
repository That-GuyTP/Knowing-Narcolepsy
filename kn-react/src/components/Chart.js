import "../css/Chart.css";
import {useState} from "react";
import Default from "../images/info/both.png";
import Normal from "../images/info/normal.png";
import Narcoleptic from "../images/info/narcoleptic.png";

const Chart = () => {
    const [activeButton, setActiveButton] = useState(null);
    const [chartImage, setChartImage] = useState(Default);

    const changeButtonState = (buttonId) => {
        setActiveButton(buttonId)
        switch (buttonId) {
            case "normal":
                setChartImage(Normal);
                break;
            case "narcoleptic":
                setChartImage(Narcoleptic);
                break;
            case "both":
                setChartImage(Default);
                break;
            default:
                setChartImage(Default);
                break;
        }
    }
    
    return (
        <>
        <div id="chart">
            <h2>Sleep Cycle Comparison</h2>
            <section className="center">
                <section id="button-container">
                    <button 
                        id="normal" 
                        class={activeButton === "normal" ? "isClicked" : "notClicked"} 
                        onClick={() => changeButtonState("normal")}
                    >Normal</button>
                    <button 
                        id="narcoleptic" 
                        className={activeButton === "narcoleptic" ? "isClicked" : "notClicked"}
                        onClick={() => changeButtonState("narcoleptic")}
                    >Narcoleptic</button>
                    <button 
                        id="both" 
                        className={activeButton === "both" ? "isClicked" : "notClicked"}
                        onClick={() => changeButtonState("both")}
                    >Both</button>
                </section>
            </section>
            <section className="center">
                <section id="chart-img-container">
                    <img id="chart-img" src={chartImage} alt="A chart depicting the sleep cycles of a narcoleptic vs a normal person."></img>
                    <p id="copyright">Copyright - https://bidmcneurology.org/education-programs/harvard-bidmc-neurology-fellowship-training-programs/sleep-disorders/</p>
                </section>
            </section>
        </div>
        </>
    );
}

export default Chart;