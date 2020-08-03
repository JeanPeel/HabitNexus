import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

var formData = require("../../data/formData");

var LinkItem = this.state.LinkItem;
var DateItem = this.state.DateItem;
var updateDateItem = this.state.DateItem;
var NameItem = this.state.NameItem;
var CategoryItems = this.state.CategoryItems;
var DifficultyItem = this.state.DifficultyItem;
var DurrationItem = this.state.DurrationItem;
var PriorityItem = this.state.PriorityItem;
var selectedTOD = this.state.selectedTOD;
var selectedHour = this.state.selectedHour;
var WeekSchedule = this.state.WeekSchedule;
// var EmailItem = this.state.EmailItem;
// var PasswordItem = this.state.PasswordItem;
// var UserNameItem = this.state.UserNameItem;


class SubmitBTN extends React.Component {

    state = {
        newHabit: {
            Date: DateItem,
            Date2: updateDateItem,
            Item: NameItem,
            Category: CategoryItems,
            Priority: PriorityItem,
            Dificulty: DifficultyItem,
            Durration: DurrationItem,
            WeekDays: WeekSchedule,
            Time: selectedTOD,
            Hour: selectedHour,
            Link: LinkItem
        }
    };

    updateInputValue0 = d => {
        this.setState({ newHabit: d.target.value });
        console.log("newHabit: ", d.target.value)
    };

    render() {
        const { newHabit } = this.state;

        return (
            <div>
                <button
                    type="submit"
                    onClick={this.updateInputValue0}
                    className="submitBTN"
                    form="form"
                    value={newHabit}
                >Submit</button>
            </div >
        );
    }

}

export default SubmitBTN;
