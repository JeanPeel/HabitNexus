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

    newHabit = this.state.newHabit;
    selectedHour = this.state.newHabit.selectedHour;
    valueB = "";

    handleChange2 = (HourState) => {

        const newHabit = this.state.newHabit

        const { selectedHour } = this.newHabit.selectedHour

        this.setState({ HourState: HourState });
        console.log(`Hour selected: `, HourState);
        var valueB = HourState.value
        console.log(`valueB: `, valueB);

        this.setState({ newHabit: { selectedHour: HourState.value } });

        this.setState({ selectedHour: HourState.value });

        console.log(`selectedHour: `, selectedHour);
    };


    render() {

        const { HourState } = this.state;

        const { newHabit } = this.state.newHabit;

        var { selectedHour } = this.state.newHabit.selectedHour;

        console.log("newHabit: ", this.state.newHabit)

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