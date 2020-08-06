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
        linkstate : "",
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

    updateInputValue = e => {

        const value2 = e.target.value

        this.setState({ linkstate : value2 });

        this.setState({ newHabit: { linkitem: value2 } });
    };



    render() {
        
        var { linkstate  } = this.state.linkstate ;

        var { newHabit } = this.state.newHabit;

        var { linkitem } = this.state.newHabit.linkitem;

        console.log("newHabit on Add Link: ", this.state.newHabit)

        return (
            <div>
                <label htmlFor="linkitem" >Add Link to info or image (optional): </label>
                <input
                    type="url"
                    name="linkitem"
                    value={linkitem}
                    placeholder="Add a Link Here"
                    className="linkitem"
                    onChange={this.updateInputValue}
                    linkstate ={this.state.linkstate }
                    linkitem={this.state.newHabit.linkitem}
                />
            </div>
        );
    }
}

export default AddLink;