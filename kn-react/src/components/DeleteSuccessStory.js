import "../css/Dialog.css";
import React, { useState } from "react";

const DeleteSuccessStory = (value) => {
    const [result, setResult] = useState("");
    const deleteSS = async() => {
        const response = await fetch(`http://localhost:3001/api/success-stories/${value._id}`, {
            method:"DELETE"
        });
        if (response.status === 200) {
            setResult("Success Story successfully deleted.");
        } else {
            setResult("Error! Success Story couldn't be deleted");
        }
    };

    //Modal
    return (
        <div id="delete-dialog" className="w3-modal">
          <div className="w3-modal-content">
            <div className="w3-container">
              <span
                id="dialog-close"
                className="w3-button w3-display-topright"
                onClick={value.closeDialog}
              >
                &times;
              </span>
              <div id="delete-content">
                <h3>Are you sure you want to delete {value.name}'s story?</h3>
                <section>
                  <button onClick={value.closeDialog}>No</button>
                  <button onClick={deleteSS}>Yes</button>
                </section>
                <span>{result}</span>
              </div>
            </div>
          </div>
        </div>
    );
};

export default DeleteSuccessStory;