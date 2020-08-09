import React, { Component } from "react";
import "../style.css";
import Select from 'react-select';

var timeOfDay = require("../../data/timeOfDay");

var todData = require("../../data/tod");

class TOD extends React.Component {

    // selectedTOD= ""

    state = {
        TODState: "",
    }

    valueC = "";

    handleChange = (TODState) => {

        this.setState({ TODState: TODState });
     
        var valueC = TODState.value
      
        this.setState({ selectedTOD: TODState.value });

    };

    render() {
        const { TODState } = this.state.TODState;

        todData.unshift(this.state.TODState.value)

        return (
            <div>
                <label htmlFor="TimeDay">Time Of Day</label>
                <Select
                    name="TimeDay"
                    value={TODState}
                    onChange={this.handleChange}
                    options={timeOfDay}
                />
            </div >
        );
    }
}

export default TOD;