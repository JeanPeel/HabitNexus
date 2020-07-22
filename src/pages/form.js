import React, { Component } from "react";
import "./style.css";

class Form extends Component {

    render() {
        return (
            <div>
                <h1>New Habit Form</h1>
                <form action="/register" method="POST">
                    <div>
                        <label for="text">Habit Name: </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label for="date" >Start Date: </label>
                        <input type="date" />
                    </div>
                    <div>
                        <label for="cars">Category</label>
                        <select name="cars" id="cars">
                        <option value="close_friends">Select a Category</option>
                            <option value="close_friends">Close Friends</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="exercise">Exercise</option>
                            <option value="family">Family</option>
                            <option value="finances">Finances</option>
                            <option value="food">Food</option>
                            <option value="grooming">Grooming</option>
                            <option value="health">Health</option>
                            <option value="hobby">Hobby</option>
                            <option value="home">Home</option>
                            <option value="mental_health">Mental Health</option>
                            <option value="pets">Pets</option>
                            <option value="school">School</option>
                            <option value="shopping">Shopping</option>
                            <option value="social_connections">Social Connections</option>
                            <option value="spiritual">Spiritual</option>
                            <option value="work">Work</option>
                        </select>
                    </div>
                    <div>
                        <label for="priority" >Days to Repeat: </label>
                        <fieldset name="weekday">
                        <input type="checkbox" id="monday" name="weekday" value="1" />
                        <label for="monday">Monday</label>
                        <input type="checkbox" id="tuesday" name="weekday" value="2" />
                        <label for="tuesday">Tuesday</label>
                        <input type="checkbox" id="wednesday" name="weekday" value="3" />
                        <label for="wednesday">Wednesday</label>
                        <input type="checkbox" id="thursday" name="weekday" value="4" />
                        <label for="thursday">Thursday</label>
                        <input type="checkbox" id="friday" name="weekday" value="5" />
                        <label for="friday">Friday</label>
                        <input type="checkbox" id="saturday" name="weekday" value="6" />
                        <label for="saturday">Saturday</label>
                        <input type="checkbox" id="sunday" name="weekday" value="7" />
                        <label for="sunday">Sunday</label>
                        </fieldset>
                    </div>
                    <div>
                        <label for="priority" >Time of Day: </label>
                        <fieldset name="daytime">
                        <input type="checkbox" id="morning" name="daytime" value="8.1" />
                        <label for="morning">Morning</label>
                        <input type="checkbox" id="afternoon" name="weekday" value="8.2" />
                        <label for="afternoon">Afternoon</label>
                        <input type="checkbox" id="evening" name="weekday" value="8.3" />
                        <label for="evemomg">Evening</label>
                        <input type="checkbox" id="night" name="weekday" value="8.4" />
                        <label for="night">Night</label>
                       </fieldset>
                    </div>
                    <div>
                        <label for="priority" >Priority: </label>
                        <fieldset name="priority">
                        <input type="radio" id="high" name="priority" value="31" />
                        <label for="high">High</label>
                        <input type="radio" id="medium" name="priority" value="21" />
                        <label for="medium">Medium</label>
                        <input type="radio" id="low" name="priority" value="11" />
                        <label for="low">Low</label>
                        </fieldset>
                    </div>
                    <div>
                        <label for="dificulty" >Dificulty Level: </label>
                        <fieldset name="difficulty">
                        <input type="radio" id="dificult" name="difficulty" value="32" />
                        <label for="dificult">Dificult</label>
                        <input type="radio" id="moderate" name="difficulty" value="22" />
                        <label for="moderate">Moderate</label>
                        <input type="radio" id="easy" name="difficulty" value="12" />
                        <label for="easy">Easy</label>
                        </fieldset>
                    </div>
                    <div>
                        <label for="durration" >Durration: </label>
                        <fieldset name="durration">
                        <input type="radio" id="upkeep" name="durration" value="60" />
                        <label for="upkeep">Regular-Upkeep (1 hour or less)</label>
                        <input type="radio" id="task" name="durration" value="30" />
                        <label for="task">Fast-Task (30 min or less)</label>
                        <input type="radio" id="quick" name="durration" value="10" />
                        <label for="bit">Quick-bit (10 mins or less)</label>
                        </fieldset>
                    </div>
                    <div>
                        <label for="url">Link to info or image (optional): </label>
                        <input type="url" />
                    </div>
                    <div> Score </div>
                    <button type="submit">Submit</button>
                </form>
                <a href="/login">Login</a>
            </div>
        );
    }
}

export default Form;