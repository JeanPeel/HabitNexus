import React, { Component } from "react";
import "../style.css";
import Select from 'react-select';

var hours = require("../../data/hours");

var formData = require("../../data/formData");

class Hours extends React.Component {

    state = {
        HourState: "",
    }

    componentDidMount() {

        formData[14] = "8:00 AM"
    }

    valueB = "";

    handleChange2 = (HourState) => {

        this.setState({ HourState: HourState });
     
        var valueB = HourState.value

        this.setState({ selectedHour: HourState.value });

        formData[14] = valueB

    };


    render() {

        const { HourState } = this.state.HourState;
       
        return (
            <div>
                <label htmlFor="Hours">Hour of the Day</label>
                <Select
                    name="Hours"
                    placeholder="and/or Select an Hour of the Day (Default is 8:00 am)"
                    value={HourState}
                    onChange={this.handleChange2}
                    options={hours}
                />
            </div >
        );
    }
}

export default Hours;