import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');



class WeekRepeat extends Component {

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
                <label for="weekday" >Week Days to Repeat: </label>
                <fieldset name="weekday">
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="weekday" 
                    value="monday" />
                    <label for="monday">Monday</label>
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="weekday" 
                    value="tuesday" />
                    <label for="tuesday">Tuesday</label>
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="weekday" 
                    value="wednesday" />
                    <label for="wednesday">Wednesday</label>
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="weekday" 
                    value="thursday" />
                    <label for="thursday">Thursday</label>
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="weekday" 
                    value="friday" />
                    <label for="friday">Friday</label>
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="weekday" 
                    value="saturday" />
                    <label for="saturday">Saturday</label>
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="weekday" 
                    value="sunday" />
                    <label for="sunday">Sunday</label>
                </fieldset>
            </div>
        );
    }
}

export default WeekRepeat;