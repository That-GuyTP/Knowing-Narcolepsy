import "../css/FormEmail.css";

const Form_Email = () => {
    return (
        <div>
            <h2>Email</h2>
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
    );
};

export default Form_Email;