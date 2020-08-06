import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');
import Select from 'react-select';

var hours = require("../../data/hours");

class Hours extends React.Component {

    // selectedHour= ""

    state = {
        HabitItem: '',
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
        FormState: "",
        show: false,
        newHabit: {
            PriorityItem: "",
            LinkItem: "",
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

    newHabit = this.state.newHabit;
    selectedHour = this.state.newHabit.selectedHour;
    valueB = "";

    handleChange2 = (HourState) => {

        const newHabit = this.state.newHabit

        const { selectedHour } = this.newHabit.selectedHour

        this.setState({ HourState: HourState });
        console.log(`Hour selected on Hours: `, HourState);
        var valueB = HourState.value
        console.log(`valueB on Hours: `, valueB);

        this.setState({ newHabit: { selectedHour: HourState.value } });

        this.setState({ selectedHour: HourState.value });

        console.log(`selectedHour on Hours: `, selectedHour);
    };


    render() {

        const { HourState } = this.state.HourState;

        const { newHabit } = this.state.newHabit;

        var { selectedHour } = this.state.newHabit.selectedHour;

        console.log("newHabit on Hours: ", this.state.newHabit)

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