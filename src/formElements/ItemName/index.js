import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

var formData = require("../../data/item");

class ItemName extends React.Component {

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

    updateInputValue2 = f => {

        const value7 = f.target.value

        this.setState({ ItemState: value7 });

        this.setState({ newHabit: { NameItem: value7 } });
    };



    render() {
        const { ItemState } = this.state.ItemState;

        const { newHabit } = this.state.newHabit;

        const { NameItem } = this.state.newHabit.NameItem;

        // formData.push("ItemState: "+this.state.ItemState)
        // formData.unshift("ItemState: "+this.state.ItemState)
        formData.unshift(this.state.ItemState)
        formData.pop()

        // console.log("newHabit on Item Name: ", this.state.newHabit)

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