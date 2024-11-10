import "../css/FormEmail.css";
import {useState} from 'react';
import React from 'react';

const Form_Email = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "15d2a7d7-a1e7-4622-b5fa-74c4454f2692");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("You email has been added to the list!");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };
    
    return (
        <div className="div-content">
            <h2>Email</h2>
            <form id="form-email"onSubmit={onSubmit}>
                <p>All support is greatly appreciated. If you'd like to be kept up to date with all narcolepsy related news please enter your email here:</p>
                <section id="form-email-inputs">
                    <label for="name">Name: </label>
                    <input id="name" type="text" placeholder="Last, First" name="name" required/>

                    <label for="email">Email:</label>
                    <input id="email" type="email" name="email" placeholder="example@email.com" required />
                </section>
                <button type="submit">Submit</button>
            </form>
            <span>{result}</span>
        </div>
    );
};

export default Form_Email;