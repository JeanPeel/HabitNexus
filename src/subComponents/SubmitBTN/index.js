import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

var formData = require("../../data/formData");

var LinkItem = "";
var DateItem = "";
var updateDateItem = "";
var NameItem = "";
var CategoryItems = "";
var DifficultyItem = "";
var DurrationItem = "";
var PriorityItem = "";
var selectedTOD = "";
var selectedHour = "";
var WeekSchedule = ""
// var EmailItem = this.state.EmailItem;
// var PasswordItem = this.state.PasswordItem;
// var UserNameItem = this.state.UserNameItem;


class SubmitBTN extends React.Component {

    // LinkItem = this.state.LinkItem;
    // DateItem = this.state.DateItem;
    // updateDateItem = this.state.DateItem;
    // NameItem = this.state.NameItem;
    // CategoryItems = this.state.CategoryItems;
    // DifficultyItem = this.state.DifficultyItem;
    // DurrationItem = this.state.DurrationItem;
    // PriorityItem = this.state.PriorityItem;
    // selectedTOD = this.state.selectedTOD;
    // selectedHour = this.state.selectedHour;
    // WeekSchedule = this.state.WeekSchedule;

    // state = {
    //     newHabit: {
    //         LinkItem : this.state.LinkItem,
    //         DateItem : this.state.DateItem,
    //         updateDateItem : this.state.DateItem,
    //         NameItem : this.state.NameItem,
    //         CategoryItems : this.state.CategoryItems,
    //         DifficultyItem : this.state.DifficultyItem,
    //         DurrationItem : this.state.DurrationItem,
    //         PriorityItem : this.state.PriorityItem,
    //         selectedTOD : this.state.selectedTOD,
    //         selectedHour : this.state.selectedHour,
    //         WeekSchedule : this.state.WeekSchedule

    //     }
    // };

    // updateInputValue0 = d => {
    //     this.setState({ newHabit: d.target.value });
    //     console.log("newHabit: ", d.target.value)
    // };

    render() {
        // const { newHabit } = this.state;

        return (
            <div>
                <button
                    type="submit"
                    // onClick={this.updateInputValue0}
                    className="submitBTN"
                    form="form"
                    // value={newHabit}
                >Submit</button>
            </div >
        );
    }

}

export default SubmitBTN;
