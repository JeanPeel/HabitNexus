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
                <label for="TimeDay">Time Of Day</label>
                <Select
                    name="TimeDay"
                    value={selectedTOD}
                    onChange={this.handleChange}
                    options={timeOfDay}
                />
            </div>
        );
    }
}

export default TOD;