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

var formData = require("../../data/weekdays");


class WeekRepeat extends React.Component {

    state = {
        HabitItem: '',
        linkstate : "",
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

        }
        else if (n.target.id === 'tuesday') {

            WeekSchedule.Tuesday = WeekSchedule.Tuesday ? false : true;

        }
        else if (n.target.id === 'wednesday') {

            WeekSchedule.Wednesday = WeekSchedule.Wednesday ? false : true;


        }
        else if (n.target.id === 'thursday') {

            WeekSchedule.Thursday = WeekSchedule.Thursday ? false : true;

        }
        else if (n.target.id === 'friday') {

            WeekSchedule.Friday = WeekSchedule.Friday ? false : true;

        }
        else if (n.target.id === 'saturday') {

            WeekSchedule.Saturday = WeekSchedule.Saturday ? false : true;

        }
        else if (n.target.id === 'sunday') {

            WeekSchedule.Sunday = WeekSchedule.Sunday ? false : true;

        }

        this.setState({ newHabit: { WeekSchedule: WeekSchedule } });


        // console.log("WeekState on Week: ", n.target.id)
        // console.log("WeekSchedule on Week: ", WeekSchedule)
    };


    render() {
        const { WeekState } = this.state.WeekState;

        const { newHabit } = this.state.newHabit;

        const { WeekSchedule } = this.state.newHabit.WeekSchedule;

        // formData.push("WeekSchedule: " + this.state.newHabit)
        // formData.unshift("WeekSchedule: " + this.state.newHabit)
        formData.unshift(this.state.newHabit)
        formData.pop()

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