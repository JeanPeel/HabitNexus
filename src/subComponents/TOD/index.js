import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');
import Select from 'react-select';

var timeOfDay = require("../../data/timeOfDay");
var hours = require("../../data/hours");

class TOD extends React.Component {

    state = {
        selectedTOD: "",
        selectedHour: ""
    };

    handleChange = selectedTOD => {
        this.setState({ selectedTOD });
        console.log(`TOD selected: `, selectedTOD);
    };

    handleChange2 = selectedHour => {
        this.setState({ selectedHour });
        console.log(`Hour selected: `, selectedHour);
    };

    render() {
        const { selectedTOD } = this.state;
        const { selectedHour } = this.state;

        return (
            <div>
                <label htmlFor="TimeDay">Time Of Day</label>
                <Select
                    name="TimeDay"
                    value={selectedTOD}
                    onChange={this.handleChange}
                    options={timeOfDay}
                />
                <label htmlFor="Hours">Or Select an Hour</label>
                <Select
                    name="Hours"
                    value={selectedHour}
                    onChange={this.handleChange2}
                    options={hours}
                />
            </div >
        );
    }
}

export default TOD;