import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');
import Select from 'react-select';

var timeOfDay = require("../../data/timeOfDay");

class TOD extends React.Component {

    state = {
        selectedTOD: null,
    };
    handleChange = selectedTOD => {
        this.setState({ selectedTOD });
        console.log(`TOD selected: `, selectedTOD);
    };

    render() {
        const { selectedTOD } = this.state;

        return (
            <div>
                <label htmlFor="TimeDay">Time Of Day</label>
                <Select
                    name="TimeDay"
                    value={selectedTOD}
                    onChange={this.handleChange}
                    options={timeOfDay}
                />
                <label htmlFor="TimeDay">Or Enter Custome Time</label>
                <select>
                    <option
                        name="TimeDay"
                        value="12:00 AM"
                    >12:00 AM</option>
                    <option
                        name="TimeDay"
                        value="1:00 AM"
                    >1:00 AM</option>
                    <option
                        name="TimeDay"
                        value="2:00 AM"
                    >2:00 AM</option>
                    <option
                        name="TimeDay"
                        value="3:00 AM"
                    >3:00 AM</option>
                    <option
                        name="TimeDay"
                        value="4:00 AM"
                    >4:00 AM</option>
                    <option
                        name="TimeDay"
                        value="5:00 AM"
                    >5:00 AM</option>
                    <option
                        name="TimeDay"
                        value="6:00 AM"
                    >6:00 AM</option>
                    <option
                        name="TimeDay"
                        value="7:00 AM"
                    >7:00 AM</option>
                    <option
                        name="TimeDay"
                        value="8:00 AM"
                    >8:00 AM</option>
                    <option
                        name="TimeDay"
                        value="9:00 AM"
                    >9:00 AM</option>
                    <option
                        name="TimeDay"
                        value="10:00 AM"
                    >10:00 AM</option>
                    <option
                        name="TimeDay"
                        value="11:00 AM"
                    >11:00 AM</option>
                    <option
                        name="TimeDay"
                        value="12:00 PM"
                    >12:00 PM</option>
                    <option
                        name="TimeDay"
                        value="1:00 PM"
                    >1:00 PM</option>
                    <option
                        name="TimeDay"
                        value="2:00 PM"
                    >2:00 PM</option>
                    <option
                        name="TimeDay"
                        value="3:00 PM"
                    >3:00 PM</option>
                    <option
                        name="TimeDay"
                        value="4:00 PM"
                    >4:00 PM</option>
                    <option
                        name="TimeDay"
                        value="5:00 PM"
                    >5:00 PM</option>
                    <option
                        name="TimeDay"
                        value="6:00 PM"
                    >6:00 PM</option>
                    <option
                        name="TimeDay"
                        value="7:00 PM"
                    >7:00 PM</option>
                    <option
                        name="TimeDay"
                        value="8:00 PM"
                    >8:00 PM</option>
                    <option
                        name="TimeDay"
                        value="9:00 PM"
                    >9:00 PM</option>
                    <option
                        name="TimeDay"
                        value="10:00 PM"
                    >10:00 PM</option>
                    <option
                        name="TimeDay"
                        value="11:00 PM"
                    >11:00 PM</option>
                </select>
            </div>
        );
    }
}

export default TOD;