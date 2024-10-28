import "../css/Root.css";
import "../css/Support.css";
import NarcolepsyNetwork from "../images/Support_NarcolepsyNetwork.png";
import KnowNarcolepsy from "../images/Support_KnowNarcolepsy.png";
import Reddit from "../images/Support_Reddit.png";
import Wake from "../images/Support_Wake.png";

const Support = () => {
    return (
        <>
        <h1>Support</h1>
        <div>
            <form id="form-email" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="15d2a7d7-a1e7-4622-b5fa-74c4454f2692"/>
                <p>All support is greatly appreciated. If you'd like to be kept up to date with all narcolepsy related news please enter your email here:</p>
                <section id="form-email-inputs">
                    <label for="name">Name: </label>
                    <input id="name" type="text" placeholder="Last, First" name="name" required/>

                    <label for="email">Email:</label>
                    <input id="email" type="email" name="email" placeholder="example@email.com" required />

                    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                    <input type="hidden" name="subject" value="Contact from Knowing Narcolepsy"/>
                    <input type="hidden" name="from_name" value="My Website"/>
                </section>
                <button type="submit">Submit</button>
                <p id="result"></p>
                
            </form>
            
        </div>
        <div>
            <form id="form-success-story">
                <h2>Success Stories</h2>
                <label></label>
                <input type="text" id="first-name" class="user-info" placeholder="First Name" value=""></input>

                <label></label>
                <input type="text" id="last-name" class="user-info" placeholder="Last Name" value=""></input>
                
                <label></label>
                <input type="text" id="date_diagnosed" class="user-info" placeholder="Date Diagnosed" value=""></input>

                <label></label>
                <input type="text" id="type_of_narcolepsy" class="user-info" placeholder="Type of Narcolepsy" value=""></input>

                <label></label>
                <input type="text" id="user_text" class="user-info" placeholder="Your Story" value=""></input>

                <label></label>
                <input type="text" id="state" class="user-info" placeholder="State" value=""></input>

                <label></label>
                <input type="text" id="city" class="user-info" placeholder="City" value=""></input>
            </form>
        </div>
        <div>
            <section class="columns">
                <section class="one">
                    <a href="https://narcolepsynetwork.org" target="_blank" rel="noreferrer">
                    <img class="support-img" href="https://narcolepsynetwork.org" src={ NarcolepsyNetwork } alt=""></img>
                    </a>
                </section>
                <section class="three">
                    <p>"Narcolepsy Network is a national patient support organization founded in 1986. We are a nonprofit organization that relies on member dues and donations to fund our basic programs."</p>
                </section>
            </section>
            <section class="columns">
                <section class="one">
                    <a href="https://knownarcolepsy.com/" target="_blank" rel="noreferrer">
                    <img class="support-img" src={KnowNarcolepsy} alt=""></img>
                    </a>
                </section>
                <section class="three">
                    <p>Know Narcolepsy is a organization that informs and advocates for narcoleptics around the world. They have several resources to help connect naroleptics with advocacy groups and resources to help better their situations.</p>
                </section>
            </section>
            <section class="columns">
                <section class="one">
                    <a href="https://www.reddit.com/r/Narcolepsy/" target="_blank" rel="noreferrer">
                    <img class="support-img" src={Reddit} alt=""></img>
                    </a>
                </section>
                <section class="three">
                    <p>This is a link to the r/Narcolepsy reddit that fellow narcoleptics use to communicate their experiences and questions. I recommend it as you can get in contact with others who may be able to share advice and useful experiences.</p>
                </section>
            </section>
            <section class="columns">
                <section class="one">
                    <a href="https://www.wakeupnarcolepsy.org/" target="_blank" rel="noreferrer">
                    <img class="support-img" src={Wake} alt=""></img>
                    </a>
                </section>
                <section class="three">
                    <p>"Upon recognizing the great need to raise awareness and research funds for Narcolepsy, Monica and David Gow teamed up with Kevin Cosgrove to establish Wake Up Narcolepsy, Inc. in 2008. Wake Up Narcolepsy (WUN) has quickly become a national leader for Narcolepsy advocacy, as it is dedicated to funding research into the causes, prevention, treatments and a cure while increasing education and understanding amongst the public. Every year, Wake Up Narcolepsy hosts various awareness-driven events and makes substantial contributions to cutting-edge Narcolepsy research."</p>
                </section>
            </section>
        </div>
        </>
    );
};

export default Support;