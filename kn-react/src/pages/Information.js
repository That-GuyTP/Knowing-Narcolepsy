import "../css/Information.css";
import Navigation from "../components/Navigation";
import Chart from "../components/Chart";

const Information = () => {
    return (
        <>
        <h1>Information</h1>
        <Navigation />
        <div id="sci-info" className="div-content">
            <h2>What's The Science Behind Narcolepsy?</h2>
            <p> It's important to understand that there are two types of narcolepsy: Type I Narcolepsy which includes cataplexy and Type II Narcolepsy which is without cataplexy.
                While cataplexy comes in many forms, it's most common form is the sudden loss of control of the body because the brain sending signals to fall asleep. The reason narcoleptics struggle with their sleep is because
                of their inability to regulate a neurotransmitter called Hypocretin (Orexin). These are the main neruons that help regulate wakefulmess, arousal, and REM sleep. The most common belief
                currently of why this happens is because a narcoleptic's immune system is attacking and destroying these neurons causing their deficiency. Because Narcolepsy isn't fully understood, scientist don't have an answer 
                as to what causes someone to develop narcolepsy. The most common theories are genetics (still unconfirmed), chronic strep throat, head injuries, emotional truama, and brain disorders.
            </p>
            <iframe 
                id="youtubeVideo"
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/DJU0CyDCETI?si=8DTyzhQDE1vBHA_z" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
            ></iframe>
        </div>
        <div id="Symp" className="div-content">
            <h2>Symptoms</h2>
            <p>The Symptoms of Narcolepsy can include any of the following:</p>
            <ul id="symp-list">
                <li><b>Excessive Daytime Sleepiness</b> - This is where individuals experience overwhelming drowsiness and the urge to sleep during the day, even after a full night's sleep. This can vary in terms of duration and when it shows up.</li>
                <li><b>Cataplexy</b> - Effecting only Type I Narcoleptics, this is the sudden or brief loss of muscle control, often triggered by strong emotions like laughter, excitement, or anger. Cataplexy can result in the individual completely falling asleep or them becoming weak and fatiqued.</li>
                <li><b>Sleep Paralysis</b> - Occurs when an individual is attempting to wake up. Their mind will wake up but their bodies will not. This occurance is often paried with hallucinations.</li>
                <li><b>Hallucinations</b> - Both when falling asleep and waking up these appear in many forms such as visual or audible.</li>
                <li><b>Segmented Nighttime Sleep</b> - An occurance where individuals wake up throughout the night due to disturbances like sleep apnea or vivid dreams.</li>
                <li><b>Automatic Behavior</b> - When individuals preform routine taks without full awareness or memory of the acitivity. This can affect mondane things like eating or working, and can even effect things like driving or exercising.</li>
                <li><b>Insomnia</b> - While narcoleptics can sleep a lot throughout the day some suffer from episodes of insomnia often waking up at odd times not being able to fall back asleep. It is often a misconception that narcoleptics do not suffer from insomnia as they sleep so often.</li>
            </ul>
            <p>Feel free to ask me about any of these!</p>
        </div>
        <div className="div-content">
            <Chart />
        </div>
        </>
    );
};

export default Information;