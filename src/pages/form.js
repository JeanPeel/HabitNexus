import React, { Component } from "react";
import "./style.css";

class Form extends Component {

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form action="/register" method="POST">
                    <div>
                        <label for="text">Habit Name: </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label for="datetime-local">Start Date: </label>
                        <input type="datetime-local" />
                    </div>
                    <div>
                        <label for="priority" >Priority: </label>
                        <input type="radio" id="High" name="priority" value="31" />
                        <label for="High">High</label>
                        <input type="radio" id="Medium" name="priority" value="21" />
                        <label for="Medium">Medium</label>
                        <input type="radio" id="Low" name="priority" value="11" />
                        <label for="Low">Low</label>
                    </div>
                    <div>
                        <label for="dificulty" >Dificulty Level: </label>
                        <input type="radio" id="Dificult" name="priority" value="32" />
                        <label for="Dificult">Dificult</label>
                        <input type="radio" id="Moderate" name="priority" value="22" />
                        <label for="Moderate">Moderate</label>
                        <input type="radio" id="Easy" name="priority" value="12" />
                        <label for="Easy">Easy</label>
                    </div>
                    <div>
                    <label for="durration" >Durration: </label>
                        <input type="radio" id="Job" name="priority" value="60" />
                        <label for="Job">Job (1 hour or less)</label>
                        <input type="radio" id="Task" name="priority" value="20" />
                        <label for="Task">Task (20 min or less)</label>
                        <input type="radio" id="Quick" name="priority" value="5" />
                        <label for="Quick">Quick (5 mins or less)</label>
                    </div>
                    <div>
                        <label for="url">Link to info or image (optional): </label>
                        <input type="url" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <a href="/login">Login</a>
            </div>
        );
    }
}

export default Form;