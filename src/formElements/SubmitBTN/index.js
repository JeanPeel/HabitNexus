import React, { Component } from "react";
import {Alert} from "react";
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
        UserState: "",
        EmailState: "",
        PasswordState: "",
        newUser: {
            UserNameItem: "",
            EmailItem: "",
            PasswordItem: ""
        },
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



    updateInputValue0 = (event) => {


        event.preventDefault();


        // these are logging but the state information is blank
        console.log("newHabit1 on Submit BTN: ", this.state.newHabit)

        console.log("newUser1 on Submit BTN: ", this.state.newUser)


    //  alert(
    //         "Submit BTN pushed!"
    //     )

    //     console.log("newHabit2: ", this.state.newHabit)


        this.setState({
            HabitItem: this.state.HabitItem,
            LinkState: this.state.LinkState,
            DateState: this.state.DateState,
            NameState: this.state.NameState,
            CategoryState: this.state.CategoryState,
            DifficultyState: this.state.DifficultyState,
            DurrationState: this.state.DurrationState,
            PriorityState: this.state.PriorityState,
            TODState: this.state.TODState,
            HourState: this.state.HourState,
            WeekState: this.state.WeekState,
            FormState: this.state.FormState,
            // show: false,
            newHabit: {
                PriorityItem: this.state.newHabit.PriorityItem,
                LinkItem: this.state.newHabit.LinkItem,
                DateItem: this.state.newHabit.DateItem,
                NameItem: this.state.newHabit.NameItem,
                CategoryItems: this.state.newHabit.CategoryItems,
                DifficultyItem: this.state.newHabit.DifficultyItem,
                DurrationItem: this.state.newHabit.DurrationItem,
                PriorityItem: this.state.newHabit.PriorityItem,
                selectedTOD: this.state.newHabit.selectedTOD,
                selectedHour: this.state.newHabit.selectedHour,
                WeekSchedule: this.state.newHabit.WeekSchedule
    
            }
        });

           // these are logging but the state information is blank

        console.log("newHabit2 on Submit BTN: ", this.state.newHabit)

        this.setState({ FormState: event.target.value });

        this.setState({ newHabit: event.target.value });

           // these are logging but the state information is blank
        // console.log("FormState3: ", FormState)
        console.log("FormState3b on Submit BTN: ", event.target.value)
        // console.log("newHabit3: ", newHabit)
        console.log("newHabit3b on Submit BTN: ", event.target.value)

        // console.log("newHabit3: ", this.state.newHabit)

        // this is showing up on the submit btn
        alert(
            "newHabit" + this.state.newHabit
            // "PriorityItem" + this.state.newHabit.PriorityItem,
            // "LinkItem" + this.state.newHabit.LinkItem,
            // "DateItem" + this.state.newHabit.DateItem,
            // "NameItem" + this.state.newHabit.NameItem,
            // "CategoryItems" + this.state.newHabit.CategoryItems,
            // "DifficultyItem" + this.state.newHabit.DifficultyItem,
            // "DurrationItem" + this.state.newHabit.DurrationItem,
            // "PriorityItem" + this.state.newHabit.PriorityItem,
            // "selectedTOD" + this.state.newHabit.selectedTOD,
            // "selectedHour" + this.state.newHabit.selectedHour,
            // "WeekSchedule" + this.state.newHabit.WeekSchedule,
            // "New User" + this.state.newUser
        )

         // this is showing up after the alert is closed
        console.log("newHabit4 on Submit BTN: ", this.state.newHabit)

    };

    // showModal = y => {
    
    //     this.setState({
    //         show: !this.state.show
    //     });


    // }


    // Alert () {
    //     alert (
    //         'New Habit: '  newHabit 
    //     );
    //     document.write (
            
    //     );
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

        // this is showing up after the alert is closed
        console.log("newHabitZ on Submit BTN: ", this.state.newHabit)

        return (
            <div>
                <button
                    type="submit"
                    onClick={
                        this.updateInputValue0

                        // this.showModal, 
                        // this.onClose
                    }
                    className="submitBTN"
                    form="form"
                    value={FormState}
                >Submit</button>
            </div >
        );
    }

}

export default SubmitBTN;
