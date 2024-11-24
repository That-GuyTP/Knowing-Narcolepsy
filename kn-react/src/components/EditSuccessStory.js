import "../css/Dialog.css";
import "../components/FormSuccessStory";
import React, { useState } from "react";

const EditSuccessStory = (value) => {
  console.log("Initial Value:", value);
  const [inputs, setInputs] = useState({
    _id: value._id,
    firstName: value.first_name,
    lastName: value.last_name,
    details: value.details || [],
    state: value.state,
    city: value.city,
    prev_img: value.img_name || null
  });
  const [result, setResult] = useState("");
  console.log("current Image:", inputs.img_name); // Debug
  console.log("Previous Image URL:", inputs.prev_img); // Debug
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleDetailsChange = (event, index, field) => {
    const updatedDetails = inputs.details.map((detail, i) =>
      i === index ? { ...detail, [field]: event.target.value } : detail);
    setInputs((prev) => ({ ...prev, details: updatedDetails }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = async(event) => { // Must be async since we're contacting the server.
    event.preventDefault(); // Prevent the function from refreshing the page.
    setResult("Confirming Edits...");
    
    //Convert updated form data to variable
    const formData = new FormData(event.target); // Take all the the form data and assign it to a variable, like in formSuccessStory.js
    formData.append("details", JSON.stringify(inputs.details)); //Convert details to JSON format.
    console.log(...formData); // DEBUG
    const response = await fetch(`http://localhost:3001/api/success-stories/${value._id}`, {
      method:"PUT",
      body:formData // Add the formData to the body.s
    });

    if(response.status === 200) {
      setResult("Succesfully updated Success Story information");
      event.target.reset();
      value.updateSuccessStory(await response.json()); // Await the response from server.js. Then send that house to value to use in updateHouse.
      value.closeDialog();
    } else {
      setResult("Error! Success Story could not be edited.");
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={value.closeDialog}
          >
            &times;
          </span>
          <form id="form-success-story" onSubmit={onSubmit} >
                <label htmlFor="name ">First Name: </label>
                <input //First Name
                  type="text" 
                  id="first-name" 
                  name="firstName" 
                  className="user-info" 
                  value={inputs.firstName || ""} 
                  onChange={handleChange}
                ></input>
                <input //Last Name
                  type="text" 
                  id="last-name" 
                  name="lastName" 
                  className="user-info" 
                  value={inputs.lastName || ""} 
                  onChange={handleChange}
                ></input>
                {inputs.details.map((detail, index) => ( //Narc_Details Editting
                  <div key={index} className="detail-section">
                    <input //Date Diagnoaed
                      type="number" 
                      id="date_diagnosed" 
                      name={`date_diagnosed_${index}`} 
                      className="user-info" 
                      value={detail.date_diagnosed || ""} 
                      onChange={(event) => handleDetailsChange(event, index, "date_diagnosed")}
                    ></input>
                    <input //Type of Narcolepsy
                      type="number" 
                      id={`type_of_narcolepsy_${index}`} 
                      name="type" 
                      className="user-info" 
                      value={detail.type_of_narcolepsy || ""} 
                      onChange={(event) => handleDetailsChange(event, index, "type_of_narcolepsy")}
                    ></input>
                    <textarea //Story
                      rows="4" cols="50"
                      id="user_text" 
                      name={`user_text_${index}`} 
                      className="user-info" 
                      value={detail.user_text || ""} 
                      onChange={(event) => handleDetailsChange(event, index, "user_text")}
                    />
                  </div>
                ))}
                <input //State
                  type="text" 
                  id="state" 
                  name="state" 
                  className="user-info" 
                  value={inputs.state || ""} 
                  onChange={handleChange}
                ></input>
                <input //City
                  type="text" 
                  id="city" 
                  name="city" 
                  className="user-info" 
                  value={inputs.city || ""} 
                  onChange={handleChange}
                ></input>
                
                <section id="img-preview-section" className="columns" /*Image*/ > 
                    <p id="img-preview">
                        <img 
                          id="img-prev" 
                          alt="The current person for the story" 
                          className="centered-image" 
                          src={inputs.img != null ? URL.createObjectURL(inputs.img) 
                              : inputs.prev_img != null ? `http://localhost:3001/images/${inputs.prev_img}` 
                              : `http://localhost:3001/images/${inputs.prev_img}` } 
                        />
                    </p>
                    <p id="img-upload">
                        <input type="file" id="img" name="img" accept="image/*" onChange={handleImageChange} />
                    </p>
                </section>
                <button type="submit">Submit</button>
                <p id="result">{result}</p>
            </form>
        </div>
      </div>
    </div>
  );
};

export default EditSuccessStory;