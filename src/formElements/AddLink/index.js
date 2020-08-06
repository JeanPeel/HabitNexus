import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

// var SubmitBTN = require('../SubmitBTN');

// import Select from 'react-select';

var linkInfo = require("../../data/linkinfo");

class AddLink extends React.Component {


    // formDataArray =  formdata

    state = {
        HabitItem: '',
        linkstate: "",
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

    updateInputValue = e => {

        const value2 = e.target.value

        this.setState({ linkstate: value2 });

        this.setState({ newHabit: { linkitem: value2 } });
    };



    render() {

        // var formDataArray=  [formdata]

        // console.log("form data array: ", formDataArray)

        var { linkstate } = this.state.linkstate;

        var { newHabit } = this.state.newHabit;

        var { linkitem } = this.state.newHabit.linkitem;

        // var formlinkstate = formData.linkstate

        // linkinfo.push("LinkState: " + this.state.linkstate)
        linkInfo.unshift(this.state.linkstate)
        //  linkinfo.pop()
        // console.log("form data: ", formData)

        // console.log('linkitem z on add link: ', this.state.newHabit.linkitem)

        // console.log("formlinkstate: ", formlinkstate)

        // console.log("newHabit on Add Link: ", this.state.newHabit)

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
                    linkstate={this.state.linkstate}
                    linkitem={this.state.newHabit.linkitem}
                />
            </div>
        );
    }
}

export default AddLink;