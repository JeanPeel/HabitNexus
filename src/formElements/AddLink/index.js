import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

// var SubmitBTN = require('../SubmitBTN');

// import Select from 'react-select';

class AddLink extends React.Component {

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

    updateInputValue = e => {

        const value2 = e.target.value

        this.setState({ LinkState: value2 });

        this.setState({ newHabit: { LinkItem: value2 } });
    };



    render() {
        
        const { LinkState } = this.state.LinkState;

        const { newHabit } = this.state.newHabit;

        const { LinkItem } = this.state.newHabit.LinkItem;

        console.log("newHabit on Add Link: ", this.state.newHabit)

        return (
            <div>
                <label htmlFor="LinkItem" >Add Link to info or image (optional): </label>
                <input
                    type="url"
                    name="LinkItem"
                    value={LinkItem}
                    placeholder="Add a Link Here"
                    className="linkItem"
                    onChange={this.updateInputValue}
                />
            </div>
        );
    }
}

export default AddLink;