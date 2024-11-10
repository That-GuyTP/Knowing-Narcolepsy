import "../css/Resources.css";
import Resource from "../components/Resource";

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}

const Images = importAll(require.context('../images/support', false, /\.(png|jpe?g|svg)$/));

const Resources = () => {
    return (
        <div id="resource-container" className="div-content">
            <h2>Resources</h2>
            <Resource 
                websiteLink="https://narcolepsynetwork.org"
                image={Images['NarcolepsyNetwork.png']}
                description='"Narcolepsy Network is a national patient support organization founded in 1986. We are a nonprofit organization that relies on member dues and donations to fund our basic programs."'
            />
            <Resource 
                websiteLink="https://knownarcolepsy.com/"
                image={Images['KnowNarcolepsy.png']}
                description='"Know Narcolepsy is a organization that informs and advocates for narcoleptics around the world. They have several resources to help connect naroleptics with advocacy groups and resources to help better their situations."'
            />
            <Resource 
                websiteLink="https://www.reddit.com/r/Narcolepsy/"
                image={Images['Reddit.png']}
                description="This is a link to the r/Narcolepsy reddit that fellow narcoleptics use to communicate their experiences and questions. I recommend it as you can get in contact with others who may be able to share advice and useful experiences."
            />
            <Resource 
                websiteLink="https://www.wakeupnarcolepsy.org/"
                image={Images['Wake.png']}
                description='"Upon recognizing the great need to raise awareness and research funds for Narcolepsy, Monica and David Gow teamed up with Kevin Cosgrove to establish Wake Up Narcolepsy, Inc. in 2008. Wake Up Narcolepsy (WUN) has quickly become a national leader for Narcolepsy advocacy, as it is dedicated to funding research into the causes, prevention, treatments and a cure while increasing education and understanding amongst the public. Every year, Wake Up Narcolepsy hosts various awareness-driven events and makes substantial contributions to cutting-edge Narcolepsy research."'
            />
            {/*
            <Resource 
                websiteLink=""
                image={Images[]}
                description=""
            />
            */}


        </div>
    );
};

export default Resources;