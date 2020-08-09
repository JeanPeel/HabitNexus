import React, { Component, useState } from "react";

import "../style.css";

var formData = require("../../data/formData");

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
        WeekState: "",
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

        componentDidMount() {

        formData[6] = "none"
        formData[7] = "none"
        formData[8] = "none"
        formData[9] = "none"
        formData[10] = "none"
        formData[11] = "none"
        formData[12] = "none"
        // console.log('formdata for the week: ', formData)

    }


    updateInputValue9 = n => {

        const value9 = n.target.value

        this.setState({ WeekState: value9 })



        if (n.target.id === 'monday') {

            WeekSchedule.Monday = WeekSchedule.Monday ? false : true;

            if ( WeekSchedule.Monday === true) {
                formData[6] = "Mon"
            } else {
                formData[6] = "none"
            }
        }
        else if (n.target.id === 'tuesday') {

            WeekSchedule.Tuesday = WeekSchedule.Tuesday ? false : true;

            if ( WeekSchedule.Tuesday === true) {
                formData[7] = "Tues"
            } else {
                formData[7] = "none"
            }
        }
        else if (n.target.id === 'wednesday') {

            WeekSchedule.Wednesday = WeekSchedule.Wednesday ? false : true;

            if (  WeekSchedule.Wednesday === true) {
                formData[8] = "Wed"
            } else {
                formData[8] = "none"
            }

        }
        else if (n.target.id === 'thursday') {

            WeekSchedule.Thursday = WeekSchedule.Thursday ? false : true;

            if (  WeekSchedule.Thursday === true) {
                formData[9] = "Thurs"
            } else {
                formData[9] = "none"
            }

        }
        else if (n.target.id === 'friday') {

            WeekSchedule.Friday = WeekSchedule.Friday ? false : true;

            if (  WeekSchedule.Friday === true) {
                formData[10] = "Fri"
            } else {
                formData[10] = "none"
            }

        }
        else if (n.target.id === 'saturday') {

            WeekSchedule.Saturday = WeekSchedule.Saturday ? false : true;

            if (  WeekSchedule.Saturday === true) {
                formData[11] = "Sat"
            } else {
                formData[11] = "none"
            }


        }
        else if (n.target.id === 'sunday') {

            WeekSchedule.Sunday = WeekSchedule.Sunday ? false : true;

            if ( WeekSchedule.Sunday === true) {
                formData[12] = "Sun"
            } else {
                formData[12] = "none"
            }
        }

        this.setState({  WeekSchedule: WeekSchedule });

            console.log("Week Data: ", weekData)

           
    };


    render() {
        const { WeekState } = this.state.WeekState;

        const { WeekSchedule } = this.state.WeekSchedule;


        console.log("WeekSchedule: ", this.state.WeekSchedule)

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
                    <br />
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