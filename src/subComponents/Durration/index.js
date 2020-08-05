import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');



class Durration extends React.Component {

    state = {
        HabitItem: '',
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

    updateInputValue8 = n => {

        const value2 = n.target.id

        this.setState({ PriorityState: value2 });

        this.setState({ newHabit: { DurrationItem: value2 } });

        // console.log("newHabit: ", this.state.newHabit)
    };



    render() {

        const { DurrationState } = this.state.DurrationState;

        const { newHabit } = this.state.newHabit;

        const { DurrationItem } = this.state.newHabit.DurrationItem;

        console.log("newHabit: ", this.state.newHabit)

        return (
            <div>
                <label htmlFor="DurrationItem" >Durration: </label>
                <fieldset name="DurrationItem">
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DurrationItem"
                        id="regular-upkeep <10min"
                        value={DurrationItem}
                        onChange={this.updateInputValue8}
                    />
                    <label htmlFor="upkeep">Regular-Upkeep (1 hour or less)</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DurrationItem"
                        id="fast-task <30min"
                        value={DurrationItem}
                        onChange={this.updateInputValue8}

                    />
                    <label htmlFor="task">Fast-Task (30 min or less)</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DurrationItem"
                        id="quick-bit <1hour"
                        value={DurrationItem}
                        onChange={this.updateInputValue8}
                    />
                    <label htmlFor="bit">Quick-bit (10 mins or less)</label>
                </fieldset>
            </div>
        );
    }

}

export default Durration;

