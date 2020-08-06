import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');
import Select from 'react-select';

var timeOfDay = require("../../data/timeOfDay");

var formData = require("../../data/tod");

class TOD extends React.Component {

    // selectedTOD= ""

    state = {
        HabitItem: '',
        linkstate : "",
        DateState: "",
        updateDateState: "",
        ItemState: "",
        CategoryState: "",
        DifficultyState: "",
        DurrationState: "",
        PriorityState: "",
        TODState: "",
        HourState: "",
        WeekState: "",
        FormState: "",
        show: false,
        newHabit: {
            PriorityItem: "",
            linkitem: "",
            DateItem: "",
            updateDateItem: "",
            NameItem: "",
            CategoryItems: "",
            DifficultyItem: "",
            DurrationItem: "",
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
    }

    newHabit = this.state.newHabit
    CategoryItems = this.state.newHabit.selectedTOD;
    valueC = "";

    handleChange = (TODState) => {

        const newHabit = this.state.newHabit

        const { selectedTOD } = this.state.newHabit.selectedTOD

        this.setState({ TODState: TODState });
        // console.log(`TODState on TOD: `, TODState);
        var valueC = TODState.value
        // console.log(`valueC on TOD: `, valueC);

        this.setState({ newHabit: { selectedTOD: TODState.value } });

        this.setState({ selectedTOD: TODState.value });

        // console.log(`selectedTOD on TOD: `, selectedTOD);
    };

    render() {
        const { TODState } = this.state.TODState;

        const { newHabit } = this.state.newHabit;

        const { selectedTOD } = this.state.newHabit.selectedTOD

        // formData.unshift("TODState: " + this.state.TODState)
        formData.unshift( this.state.TODState)
        formData.pop()

        // console.log("newHabit on TOD: ", this.state.newHabit)

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