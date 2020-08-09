import React, { Component } from "react";
import "../style.css";
import Select from 'react-select';

var timeOfDay = require("../../data/timeOfDay");

var formData = require("../../data/formData");

class TOD extends React.Component {

    // selectedTOD= ""

    state = {
        TODState: "",
    }

    componentDidMount() {

        formData[13] = "Morning"
    }

    valueC = "";

    handleChange = (TODState) => {

        this.setState({ TODState: TODState });
     
        var valueC = TODState.value
      
        this.setState({ selectedTOD: TODState.value });

        formData[13] = valueC

    };

    render() {
        const { TODState } = this.state.TODState;

        return (
            <div>
                <label htmlFor="TimeDay">Time Of Day</label>
                <Select
                    name="TimeDay"
                    placeholder="Select a Time Of Day (Default is Morning)"
                    value={TODState}
                    onChange={this.handleChange}
                    options={timeOfDay}
                />
            </div >
        );
    }
}

export default TOD;