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

var WeekItem = ""


class WeekRepeat extends React.Component {

    state = {
        WeekItem: "",
        WeekSchedule: {
            Monday: false,
            Tuesday: false,
            Wednesday: false,
            Thursday: false,
            Friday: false,
            Saturday: false,
            Sunday: false
        }
    };


    updateInputValue9 = n => {

        WeekItem = n.target.id

        this.setState({ WeekItem: n.target.id })

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
        console.log("WeekItem: ", n.target.id)
        console.log("WeekSchedule: ", WeekSchedule)
    };


    render() {
        const { WeekItem } = this.state;

        return (
            <div>
                <label htmlFor="WeekItem" >Week Days to Repeat: </label>
                <fieldset name="WeekItem">
                    <input
                        type="checkbox"
                        className="radioBTN"
                        name="WeekItem"
                        id="monday"
                        value={WeekItem}
                        onChange={this.updateInputValue9}
                    />
                    <label htmlFor="monday">Monday</label>
                    <input
                        type="checkbox"
                        className="radioBTN"
                        name="WeekItem"
                        id="tuesday"
                        value={WeekItem}
                        onChange={this.updateInputValue9}
                    />
                    <label htmlFor="tuesday">Tuesday</label>
                    <input
                        type="checkbox"
                        className="radioBTN"
                        name="WeekItem"
                        id="wednesday"
                        value={WeekItem}
                        onChange={this.updateInputValue9}
                    />
                    <label htmlFor="wednesday">Wednesday</label>
                    <input
                        type="checkbox"
                        className="radioBTN"
                        name="WeekItem"
                        id="thursday"
                        value={WeekItem}
                        onChange={this.updateInputValue9}
                    />
                    <label htmlFor="thursday">Thursday</label>
                    <input
                        type="checkbox"
                        className="radioBTN"
                        name="WeekItem"
                        id="friday"
                        value={WeekItem}
                        onChange={this.updateInputValue9}
                    />
                    <label htmlFor="friday">Friday</label>
                    <input
                        type="checkbox"
                        className="radioBTN"
                        name="WeekItem"
                        id="saturday"
                        value={WeekItem}
                        onChange={this.updateInputValue9}
                    />
                    <label htmlFor="saturday">Saturday</label>
                    <input
                        type="checkbox"
                        className="radioBTN"
                        name="WeekItem"
                        id="sunday"
                        value={WeekItem}
                        onChange={this.updateInputValue9}
                    />
                    <label htmlFor="sunday">Sunday</label>
                </fieldset>
            </div>
        );
    }
}

export default WeekRepeat;