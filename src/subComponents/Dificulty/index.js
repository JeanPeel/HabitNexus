import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

class Difficulty extends Component {

    constructor() {
        super();
        this.state = {
            name: "React"
        };
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(event) {
        console.log(event.target.value);
    }

    render() {

        return (
            <div>
                <label for="difficulty" >Difficulty Level: </label>
                <fieldset name="difficulty">
                    <input
                        type="radio"
                        className="radioBTN"
                        name="difficulty"
                        value="dificult"
                    />
                    <label for="dificult">Difficult</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="difficulty"
                        value="moderate"
                    />
                    <label for="moderate">Moderate</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="difficulty"
                        value="easy"
                    />
                    <label for="easy">Easy</label>
                </fieldset>
            </div>
        );
    }
}

export default Difficulty;