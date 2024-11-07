import "../css/FormSuccessStory.css";

const From_SuccessStory = () => {
    return (
        <div>
            <h2>Success Stories</h2>
            <form id="form-success-story">
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
    );
};

export default From_SuccessStory;