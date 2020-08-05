import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
const moment = require('moment');

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
var WeekSchedule = "";
// var EmailItem = this.state.EmailItem;
// var PasswordItem = this.state.PasswordItem;
// var UserNameItem = this.state.UserNameItem;


class SubmitBTN extends React.Component {

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




    // updateInputValue0 = d => {

    //     state = {
    //         HabitItem: '',
    //         LinkState: "",
    //         DateState: "",
    //         updateDateState: "",
    //         NameState: "",
    //         CategoryState: "",
    //         DifficultyState: "",
    //         DurrationState: "",
    //         PriorityState: "",
    //         TODState: "",
    //         HourState: "",
    //         WeekState: "",
    //         FormState: "",
    //         show: false,
    //         newHabit: {
    //             PriorityItem: "",
    //             LinkItem: "",
    //             DateItem: "",
    //             updateDateItem: "",
    //             NameItem: "",
    //             CategoryItems: "",
    //             DifficultyItem: "",
    //             DurrationItem: "",
    //             selectedTOD: "",
    //             selectedHour: "",
    //             WeekSchedule: {
    //                 Monday: false,
    //                 Tuesday: false,
    //                 Wednesday: false,
    //                 Thursday: false,
    //                 Friday: false,
    //                 Saturday: false,
    //                 Sunday: false
    //             }
    
    //         }
    //     }

    //     this.setState({ FormState: value10 });

    //     this.setState({ newHabit: value10 });
    // };

    // showModal = y => {
    
    //     this.setState({
    //         show: !this.state.show
    //     });


    // }

    // onClose = x => {
    //     this.props.show = false;
    //   };
    


    render() { 

        var AutoDate = moment().format("MM/DD/YYYY")
    
        const { FormState } = this.state.FormState;
        const { LinkState } = this.state.LinkState;
        const { CategoryState } = this.state.CategoryState;
        const { DifficultyState } = this.state.DifficultyState;
        const { DurrationState } = this.state.DurrationState;
        const { HourState } = this.state.HourState;
        const { DateState } = this.state.DateState;
        const { NameState } = this.state.NameState;
        const { PriorityState } = this.state.PriorityState;
        const { TODState } = this.state.TODState;
        const { WeekState } = this.state.WeekState;

        const { newHabit } = this.state.newHabit;


 

        // const { LinkItem } = this.state.newHabit.LinkItem;
        // var { CategoryItems } = this.state.newHabit.CategoryItems;
        // const { DifficultyItem } = this.state.newHabit.DifficultyItem;
        // const { DurrationItem } = this.state.newHabit.DurrationItem;
        // var { selectedHour } = this.state.newHabit.selectedHour;
        // const { DateItem } = this.state.newHabit.DateItem;
        // const { NameItem } = this.state.newHabit.NameItem;
        // const { PriorityItem } = this.state.newHabit.PriorityItem;
        // const { selectedTOD } = this.state.newHabit.selectedTOD;
        // const { WeekSchedule } = this.state.newHabit.WeekSchedule;

        console.log("newHabit: ", this.state.newHabit)

        return (
            <div>
                <button
                    type="submit"
                    onClick={this.updateInputValue0, this.showModal, this.onClose}
                    className="submitBTN"
                    form="form"
                    value={FormState}
                >Submit</button>
            </div >
        );
    }

}

export default SubmitBTN;
