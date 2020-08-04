import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
const moment = require('moment');

class ItemDate extends React.Component {

    DateItem = moment().format("MM/DD/YYYY")
    // now = moment();

    // console.log("AutoDate: ", AutoDate);


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

    updateInputValue6 = k => {

        const value8 = k.target.value

        this.setState({ DateState: value8  });
       
        this.setState({ newHabit: { DateItem: value8 || moment().format("MM/DD/YYYY") } });
    };




    render() {
        // var DateItem = moment().format("MM/DD/YYYY")
        var AutoDate = moment().format("MM/DD/YYYY")

        const { DateState } = this.state.DateState;

        const { newHabit } = this.state.newHabit;

        const { DateItem } = this.state.newHabit.DateItem 

        console.log("newHabit: ", this.state.newHabit)


        return (
            <div>
                <label htmlFor="DateItem" >Start Date is Today ({AutoDate}) <br />or Change Start Date: </label>
                <input
                    type="date"
                    name="DateItem"
                    value={DateItem}
                    onChange={this.updateInputValue6}
                    className="DateItem"
                />
            </div>
        );
    }
}

export default ItemDate;

