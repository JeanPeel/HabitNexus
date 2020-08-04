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
            WeekSchedule: "",
        }
    };

    newHabit = this.state.newHabit

    handleChange2 = (HourState, newHabit) => {

        const { selectedHour } = this.state.newHabit.selectedHour

        this.setState({ HourState: HourState });
        console.log(`Hour selected: `, HourState);
        var valueB = HourState.value
        console.log(`valueB: `, valueB);


        this.setState({ newHabit: { selectedHour: valueB } });

        console.log(`newHabit: `, newHabit);
    };


    render() {

        const { HourState } = this.state;


        // const { selectedHour } = this.state.newHabit.selectedHour

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