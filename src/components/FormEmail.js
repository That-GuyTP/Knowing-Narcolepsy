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

//Email Submit
/* TO BE IMPLEMENTED NEXT WEEK
const sendEmail = async(json) => {
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:json
        });

        return response;
    } catch(error){
        console.log(error);
        result.innerHTML = "Sorry, your email couldn't be sent";
    }
};

document.getElementById("form-email").onsubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    console.log(JSON) //*** DEBUG ***

    const result = document.getElementById("result");
    result.innerHTML = "Sending...";

    const httpsResult = await sendEmail(json);
    console.log(httpsResult); //*** DEBUG ***

    if(httpsResult.status == 200) {
        result.innerHTML = "Email successfully sent";
    }else {
        result.innerHTML = "ERROR! Email could not send";
    }
}
*/
export default Form_Email;