import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

class Difficulty extends React.Component {

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

    updateInputValue7 = l => {

        const value1 = l.target.id

        this.setState({ DifficultyState: value1 });

        this.setState({ newHabit: { DifficultyItem: value1 } });

        // console.log("newHabit: ", this.state.newHabit)

    };



    render() {

        const { DifficultyState } = this.state.DifficultyState;

        const { newHabit } = this.state.newHabit;

        const { DifficultyItem } = this.state.newHabit.DifficultyItem;

        console.log("newHabit on Difficulty: ", this.state.newHabit)

        return (
            <div>
                <label htmlFor="DifficultyItem" >Difficulty Level: </label>
                <fieldset name="DifficultyItem">
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DifficultyItem"
                        id="difficult"
                        value={DifficultyItem}
                        onChange={this.updateInputValue7}
                    />
                    <label htmlFor="difficult">Difficult</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DifficultyItem"
                        id="moderate"
                        value={DifficultyItem}
                        onChange={this.updateInputValue7}

                    />
                    <label htmlFor="moderate">Moderate</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DifficultyItem"
                        id="easy"
                        value={DifficultyItem}
                        onChange={this.updateInputValue7}
                    />
                    <label htmlFor="easy">Easy</label>
                </fieldset>
            </div>
        );
    }

}

export default Difficulty;
