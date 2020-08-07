import React, { Component, useState } from "react";

import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

var WeekSchedule = {
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false
}

var WeekState = ""

var weekData = require("../../data/weekdays");


class WeekRepeat extends React.Component {

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


    updateInputValue9 = n => {

        const value9 = n.target.value

        this.setState({ WeekState: value9 })

        if (n.target.id === 'monday') {

            WeekSchedule.Monday = WeekSchedule.Monday ? false : true;

            if ( WeekSchedule.Monday === true) {
                weekData[0] = "Mon"
            } else {
                weekData[0] = "none"
            }
        }
        else if (n.target.id === 'tuesday') {

            WeekSchedule.Tuesday = WeekSchedule.Tuesday ? false : true;

            if ( WeekSchedule.Tuesday === true) {
                weekData[1] = "Tues"
            } else {
                weekData[1] = "none"
            }
        }
        else if (n.target.id === 'wednesday') {

            WeekSchedule.Wednesday = WeekSchedule.Wednesday ? false : true;

            if (  WeekSchedule.Wednesday === true) {
                weekData[2] = "Wed"
            } else {
                weekData[2] = "none"
            }

        }
        else if (n.target.id === 'thursday') {

            WeekSchedule.Thursday = WeekSchedule.Thursday ? false : true;

            if (  WeekSchedule.Thursday === true) {
                weekData[3] = "Thurs"
            } else {
                weekData[3] = "none"
            }

        }
        else if (n.target.id === 'friday') {

            WeekSchedule.Friday = WeekSchedule.Friday ? false : true;

            if (  WeekSchedule.Friday === true) {
                weekData[4] = "Fri"
            } else {
                weekData[4] = "none"
            }

        }
        else if (n.target.id === 'saturday') {

            WeekSchedule.Saturday = WeekSchedule.Saturday ? false : true;

            if (  WeekSchedule.Saturday === true) {
                weekData[5] = "Sat"
            } else {
                weekData[5] = "none"
            }


        }
        else if (n.target.id === 'sunday') {

            WeekSchedule.Sunday = WeekSchedule.Sunday ? false : true;

            if ( WeekSchedule.Sunday === true) {
                weekData[6] = "Sun"
            } else {
                weekData[6] = "none"
            }
        }

        this.setState({ newHabit: { WeekSchedule: WeekSchedule } });

  

            console.log("Week Data: ", weekData)

            // weekData.unshift(this.state.newHabit)

        // console.log("WeekState on Week: ", n.target.id)
        // console.log("WeekSchedule on Week: ", WeekSchedule)
    };


    render() {
        const { WeekState } = this.state.WeekState;

        const { newHabit } = this.state.newHabit;

        const { WeekSchedule } = this.state.newHabit.WeekSchedule;

        // formData.push("WeekSchedule: " + this.state.newHabit)
        // formData.unshift("WeekSchedule: " + this.state.newHabit)
   
        // formData.pop()

        // console.log(("will week schedule push? ", this.state.newHabit))

        console.log("WeekSchedule: ", this.state.newHabit)

        return (
            <div>
                <label htmlFor="WeekState" >Week Days to Repeat: </label>
                <fieldset name="WeekState">
                    <input
                        type="checkbox"
                        className="radioBTN"
                        name="WeekState"
                        id="monday"
                        value={WeekState}
                        onChange={this.updateInputValue9}
                    />
                    <label htmlFor="monday">Monday</label>
                    <input
                        type="checkbox"
                        className="radioBTN"
                        name="WeekState"
                        id="tuesday"
                        value={WeekState}
                        onChange={this.updateInputValue9}
                    />
                    <label htmlFor="tuesday">Tuesday</label>
                    <input
                        type="checkbox"
                        className="radioBTN"
                        name="WeekState"
                        id="wednesday"
                        value={WeekState}
                        onChange={this.updateInputValue9}
                    />
                    <label htmlFor="wednesday">Wednesday</label>
                    <input
                        type="checkbox"
                        className="radioBTN"
                        name="WeekState"
                        id="thursday"
                        value={WeekState}
                        onChange={this.updateInputValue9}
                    />
                    <label htmlFor="thursday">Thursday</label>
                    <input
                        type="checkbox"
                        className="radioBTN"
                        name="WeekState"
                        id="friday"
                        value={WeekState}
                        onChange={this.updateInputValue9}
                    />
                    <label htmlFor="friday">Friday</label>
                    <input
                        type="checkbox"
                        className="radioBTN"
                        name="WeekState"
                        id="saturday"
                        value={WeekState}
                        onChange={this.updateInputValue9}
                    />
                    <label htmlFor="saturday">Saturday</label>
                    <input
                        type="checkbox"
                        className="radioBTN"
                        name="WeekState"
                        id="sunday"
                        value={WeekState}
                        onChange={this.updateInputValue9}
                    />
                    <label htmlFor="sunday">Sunday</label>
                </fieldset>
            </div>
        );
    }
}

export default WeekRepeat;