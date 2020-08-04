import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');
import Select from 'react-select';

var timeOfDay = require("../../data/timeOfDay");

class TOD extends React.Component {

    // selectedTOD= ""

    state = {
        PriorityState: "",
        LinkState: "",
        DateState: "",
        updateDateState: "",
        NameState: "",
        CategoryState: "",
        DifficultyState: "",
        DurrationState: "",
        PriorityState: "",
        TODState: "",
        HourState: "",
        WeekState: "",
        newHabit: {
            PriorityItem: "",
            LinkItem: "",
            DateItem: "",
            updateDateItem: "",
            NameItem: "",
            CategoryItems: "",
            DifficultyItem: "",
            DurrationItem: "",
            PriorityItem: "",
            selectedTOD: "",
            selectedHour: "",
            WeekSchedule: "",
        }
    };

    newHabit = this.state.newHabit

    handleChange = (TODState, newHabit) => {



        const { selectedTOD } = this.state.newHabit.selectedTOD

        this.setState({ TODState: TODState });
        console.log(`TODState: `, TODState);
        var valueA = TODState.value
        console.log(`valueA: `, valueA);

        this.setState({ newHabit: { selectedTOD: valueA } });

        console.log(`newHabit: `, newHabit);
    };

    render() {
        const { TODState } = this.state;

        // const { selectedTOD } = this.state.newHabit.selectedTOD

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