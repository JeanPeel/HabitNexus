import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

class ItemName extends React.Component {

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
            WeekSchedule: "",

        }
    };

    updateInputValue2 = f => {

        const value7 = f.target.value

        this.setState({ NameState: value7 });

        this.setState({ newHabit: {  NameItem: value7 } });
    };



    render() {
        const { NameState } = this.state.NameState;

        const { newHabit } = this.state.newHabit;

        const { NameItem } = this.state.newHabit.NameItem;

        console.log("newHabit: ", this.state.newHabit)

        return (
            <div>
                <label htmlFor="NameItem">Item Name: </label>
                <input
                    type="text"
                    name="NameItem"
                    value={NameItem}
                    placeholder="Add Item Name"
                    className="nameItem"
                    onChange={this.updateInputValue2}
                />
            </div>
        );
    }

}

export default ItemName;