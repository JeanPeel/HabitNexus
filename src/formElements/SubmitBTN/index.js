import React, { Component } from "react";
import { Alert } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
const moment = require('moment');

var categoryData = require("../../data/category");
var dateData = require("../../data/date");
var difficultyData = require("../../data/difficulty");
var durrationData = require("../../data/durration");
var hourData = require("../../data/hour");
var itemData = require("../../data/item");
var priorityData = require("../../data/priority");
var todData = require("../../data/tod");
var weekData = require("../../data/weekdays");
var linkInfo = require("../../data/linkinfo");


var linkitem = "";
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
            linkitem: "",
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

    // GetData = data => {
    //     var getFormData = e.form.value

    //     console.log("Get Form Data: ", getFormData)
    // };




    updateInputValue = e => {


        e.preventDefault();


        // these are logging but the state information is blank
        // console.log("newHabit1 on Submit BTN: ", this.state.newHabit)

        // console.log("newUser1 on Submit BTN: ", this.state.newUser)


        //  alert(
        //         "Submit BTN pushed!"
        //     )

        //     console.log("newHabit2: ", this.state.newHabit)

        // 
        // this.setState({
        //     HabitItem: this.state.HabitItem,
        //     linkstate : this.state.linkstate ,
        //     DateState: this.state.DateState,
        //     ItemState: this.state.ItemState,
        //     CategoryState: this.state.CategoryState,
        //     DifficultyState: this.state.DifficultyState,
        //     DurrationState: this.state.DurrationState,
        //     PriorityState: this.state.PriorityState,
        //     TODState: this.state.TODState,
        //     HourState: this.state.HourState,
        //     WeekState: this.state.WeekState,
        // FormState: this.state.FormState,
        // show: false,
        //     newHabit: {
        //         PriorityItem: this.state.newHabit.PriorityItem,
        //         linkitem: this.state.newHabit.linkitem,
        //         DateItem: this.state.newHabit.DateItem,
        //         NameItem: this.state.newHabit.NameItem,
        //         CategoryItems: this.state.newHabit.CategoryItems,
        //         DifficultyItem: this.state.newHabit.DifficultyItem,
        //         DurrationItem: this.state.newHabit.DurrationItem,
        //         PriorityItem: this.state.newHabit.PriorityItem,
        //         selectedTOD: this.state.newHabit.selectedTOD,
        //         selectedHour: this.state.newHabit.selectedHour,
        //         WeekSchedule: this.state.newHabit.WeekSchedule

        //     }
        // });

        // these are logging but the state information is blank

        // console.log("newHabit2 on Submit BTN: ", this.state.newHabit)

        // this.setState({ FormState: e.target.value });

        // this.setState({ newHabit: e.target.value });

        // this.setState({
        //     HabitItem: event.target.value.HabitItem,
        //     linkstate: event.target.value.linkstate,
        //     DateState: event.target.value.DateState,
        //     ItemState: event.target.value.ItemState,
        //     CategoryState: event.target.value.CategoryState,
        //     DifficultyState: event.target.value.DifficultyState,
        //     DurrationState: event.target.value.DurrationState,
        //     PriorityState: event.target.value.PriorityState,
        //     TODState: event.target.value.TODState,
        //     HourState: event.target.value.HourState,
        //     WeekState: event.target.value.WeekState,
        //     FormState: event.target.value.FormState,
        //     // show: false,
        //     newHabit: {
        //         PriorityItem: event.target.value.newHabit.PriorityItem,
        //         linkitem: event.target.value.newHabit.linkitem,
        //         DateItem: event.target.value.newHabit.DateItem,
        //         NameItem: event.target.value.newHabit.NameItem,
        //         CategoryItems: event.target.value.newHabit.CategoryItems,
        //         DifficultyItem: event.target.value.newHabit.DifficultyItem,
        //         DurrationItem: event.target.value.newHabit.DurrationItem,
        //         PriorityItem: event.target.value.newHabit.PriorityItem,
        //         selectedTOD: event.target.value.newHabit.selectedTOD,
        //         selectedHour: event.target.value.newHabit.selectedHour,
        //         WeekSchedule: event.target.value.newHabit.WeekSchedule

        var ADateData = ("dateData: " + dateData[0])
        var AItemData = ("itemData: " + itemData[0])
        var ACategoryData = ("categoryData: " + categoryData[0])
        var APriorityData = ("priorityData: " + priorityData[0])
        var ADifficultyData = ("difficultyData: " + difficultyData[0])
        var ADurrationData = ("durrationData: " + durrationData[0])
        var AWeekData = ("weekData: " + weekData[0])
        var AdTodData = ("todData: " + todData[0])
        var AHourData = ("hourData: " + hourData[0])
        var ALinkInfo = ("linkInfo: " + linkInfo[0])

    
    // });


    // these are logging but the state information is blank
    // console.log("FormState3: ", FormState)
    // console.log("FormState3b on Submit BTN: ", e.target.value)
    // console.log("newHabit3: ", newHabit)
    // console.log("newHabit3b on Submit BTN: ", e.target.value)

    // These are all comming out undefined
    // console.log(" linkstate on Submit BTN1: ", e.target.value.linkstate )
    // console.log(" linkstate on Submit BTN2: ", e.target.linkstate )
    // console.log(" linkstate on Submit BTN3: ", e.linkstate )
    // console.log(" linkstate on Submit BTN: ", linkstate)
    // console.log("newHabit3: ", newHabit)
    // console.log("PriorityItem on Submit BTN: ", event.target.value.newHabit.PriorityItem)

    // console.log("newHabit3: ", this.state.newHabit)

    // this is showing up on the submit btn





    alert(

            ADateData + "\n" + AItemData + "\n " + ACategoryData + "\n " + APriorityData + "\n " + ADifficultyData + "\n " + ADurrationData + "\n " + AWeekData + "\n " + AdTodData + "\n " + AHourData + "\n " + ALinkInfo 



                 // "e target linkstate: " + e.linkstate  ,




            // "linkstate: " + e.target.value.linkstate ,
            //  "linkitem" + this.state.newHabit.linkitem,

            // "newHabit" + this.state.newHabit
            // "PriorityItem" + this.state.newHabit.PriorityItem,

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
        // console.log("newHabit4 on Submit BTN: ", this.state.newHabit)

        // console.log('formdata on submitbtn: ', formData )

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

    // var AutoDate = moment().format("MM/DD/YYYY")

    const { FormState } = this.state.FormState;
    // const { linkstate } = this.state.linkstate;
    // const { CategoryState } = this.state.CategoryState;
    // const { DifficultyState } = this.state.DifficultyState;
    // const { DurrationState } = this.state.DurrationState;
    // const { HourState } = this.state.HourState;
    // const { DateState } = this.state.DateState;
    // const { ItemState } = this.state.ItemState;
    // const { PriorityState } = this.state.PriorityState;
    // const { TODState } = this.state.TODState;
    // const { WeekState } = this.state.WeekState;

    // const { newHabit } = this.state.newHabit;

    // var { linkstate  } = this.state.linkstate ;

    // console.log(" linkstate on Submit BTN1: ", event.target.value.linkstate)
    // console.log(" linkstate on Submit BTN2: ", event.target.linkstate)
    // console.log(" linkstate on Submit BTN3: ", event.linkstate)

    // returning no info, blank. after alert is closed
    // console.log(" linkstate on Submit BTN Z: ", this.state.linkstate )

    // const { linkitem } = this.state.newHabit.linkitem;
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
    // console.log("newHabitZ on Submit BTN: ", this.state.newHabit)

    return (
        <div>
            <button
                type="submit"
                onClick={
                    // linkstate,
                    // linkitem,

                    this.updateInputValue



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
