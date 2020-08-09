import React, { Component } from "react";
import "../style.css";
import Select from 'react-select';

var hours = require("../../data/hours");

var hourData = require("../../data/hour");

class Hours extends React.Component {

    state = {
        HourState: "",
    }

    valueB = "";

    handleChange2 = (HourState) => {

        this.setState({ HourState: HourState });
     
        var valueB = HourState.value

        this.setState({ selectedHour: HourState.value });

    };


    render() {

        const { HourState } = this.state.HourState;

        hourData.unshift(this.state.HourState.value)
       
        return (
            <div>
                <label htmlFor="Hours">Or Select an Hour</label>
                <Select
                    name="Hours"
                    value={HourState}
                    onChange={this.handleChange2}
                    options={hours}
                />
            </div >
        );
    }
}

export default Hours;