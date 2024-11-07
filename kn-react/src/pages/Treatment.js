import "../css/Root.css";
import "../css/Treatment.css";
import Navigation from "../components/Navigation";
import LifeList from "../components/LifeList";
import SuccessStories from "../components/SuccessStories";


const Treatment = () => {
    return (
        <>
        <h1>Treatment</h1>
        <Navigation />
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
        <LifeList />
        <SuccessStories />
        </>
    );
};

export default Treatment;