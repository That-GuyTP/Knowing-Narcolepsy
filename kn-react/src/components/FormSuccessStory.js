import "../css/FormSuccessStory.css";
import { useState } from "react";

const FormSuccessStory = ({ showNewStory }) => {

    //Track Added Inputs
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values)=>({...values,[name]:value}));
    };

    //Track Image for Preview
    const handleImageChange = (event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        setInputs((values)=>({...values,[name]:value}));
    };

    //Add Input to Info List
    const [result, setResult] = useState("");
    const addStoryToServer = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
            console.log(...formData); // ******* DEBUG *******
            const response = await fetch("https://knowing-narcolepsy-backend.onrender.com/api/success-stories/", { 
            method:"POST",
            body:formData
        });
        if(response.status === 200) {
            setResult("Story successfully added!");
            showNewStory(await response.json());
            setInputs({});
            event.target.reset();
        } else {
            console.log([...formData.entries()]); // ******* DEBUG *******
            setResult("Error adding story");
        }
    };
    return (
        <div className="div-content">
            <h2>Success Stories</h2>
            <form id="form-success-story" onSubmit={addStoryToServer} >
                <input type="text" id="first-name" name="firstName" className="user-info" placeholder="First Name" value={inputs.firstName || ""} onChange={handleChange}></input>
                <input type="text" id="last-name" name="lastName" className="user-info" placeholder="Last Name" value={inputs.lastName || ""} onChange={handleChange}></input>
                <input type="number" id="date_diagnosed" name="diagnosed" className="user-info" placeholder="Date Diagnosed" value={inputs.diagnosed || ""} onChange={handleChange}></input>
                <input type="number" id="type_of_narcolepsy" name="type" className="user-info" placeholder="Type of Narcolepsy" value={inputs.type || ""} onChange={handleChange}></input>
                <input type="text" id="user_text" name="story" className="user-info" placeholder="Your Story" value={inputs.story || ""} onChange={handleChange}></input>
                <input type="text" id="state" name="state" className="user-info" placeholder="State" value={inputs.state || ""} onChange={handleChange}></input>
                <input type="text" id="city" name="city" className="user-info" placeholder="City (Optional)" value={inputs.city || ""} onChange={handleChange}></input>
                
                <section id="img-preview-section" className="columns">
                    <p id="img-preview">
                        <img id="img-prev" alt="" className="centered-image" src={inputs.img != null ? URL.createObjectURL(inputs.img) : ""} />
                    </p>
                    <p id="img-upload">
                        <input type="file" id="img" name="img" accept="image/*" onChange={handleImageChange} />
                    </p>
                </section>
                <button type="submit">Submit</button>
                <p id="result">{result}</p>
            </form>
        </div>
    )
};

export default FormSuccessStory;