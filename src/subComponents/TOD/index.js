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
            WeekSchedule: {
                Monday: false,
                Tuesday: false,
                Wednesday: false,
                Thursday: false,
                Friday: false,
                Saturday: false,
                Sunday: false
            }

        }
    };

    newHabit = this.state.newHabit
    CategoryItems = this.state.newHabit.selectedTOD;
    valueC = "";

    handleChange = (TODState) => {

        const newHabit = this.state.newHabit

        const { selectedTOD } = this.state.newHabit.selectedTOD

        this.setState({ TODState: TODState });
        console.log(`TODState: `, TODState);
        var valueC = TODState.value
        console.log(`valueC: `, valueC);

        this.setState({ newHabit: { selectedTOD: TODState.value } });

        this.setState({ selectedTOD: TODState.value });

        console.log(`selectedTOD: `, selectedTOD);
    };

    render() {
        const { TODState } = this.state.TODState;

        const { newHabit } = this.state.newHabit;

        const { selectedTOD } = this.state.newHabit.selectedTOD

        console.log("newHabit: ", this.state.newHabit)

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