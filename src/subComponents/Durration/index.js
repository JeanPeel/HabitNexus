import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

class Durration extends Component {

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
                <label for="durration" >Durration: </label>
                <fieldset name="durration">
                    <input
                        type="radio"
                        className="radioBTN"
                        name="durration"
                        value="regular-upkeep" 
                        />
                    <label for="upkeep">Regular-Upkeep (1 hour or less)</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="durration"
                        value="fast-task" 
                        />
                    <label for="task">Fast-Task (30 min or less)</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="durration"
                        value="quick-bit" 
                        />
                    <label for="bit">Quick-bit (10 mins or less)</label>
                </fieldset>
            </div>
        );
    }
}

export default Durration;