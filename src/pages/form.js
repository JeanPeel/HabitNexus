import React, { Component } from "react";
import "./style.css";
import axios from 'axios';
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

import AddLink from "../subComponents/AddLink";
import Category from "../subComponents/Category";
import Durration from "../subComponents/Durration";
import ItemName from "../subComponents/ItemName";
import Priority from "../subComponents/Priority";
import SubmitBTN from "../subComponents/SubmitBTN";
import TOD from "../subComponents/TOD";
import Hours from "../subComponents/Hours";
import WeekRepeat from "../subComponents/WeekRepeat";
import ItemDate from "../subComponents/ItemDate";
import Difficulty from "../subComponents/Difficulty";

class Form extends Component {
    state = {
        HabitItem: '',
        newHabit: [],
        HabitList: [
            {
                DateItem: "DateItem",
                updateDateItem: "updateDateItem",
                NameItem: "NameItem",
                CategoryItems: "CategoryItems",
                PriorityItem: "PriorityItem",
                DifficultyItem: "DifficultyItem",
                DurrationItem: "DurrationItem",
                WeekSchedule: "WeekSchedule",
                selectedTOD: "selectedTOD",
                selectedHour: "selectedHour",
                LinkItem: "LinkItem"
            }
        ]
    }

    updateHabit = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    saveHabit = (event) => {

        event.preventDefault();

        var LinkItem = this.state.LinkItem;
        var DateItem = this.state.DateItem;
        var updateDateItem = this.state.DateItem;
        var NameItem = this.state.NameItem;
        var CategoryItems = this.state.CategoryItems;
        var DifficultyItem = this.state.DifficultyItem;
        var DurrationItem = this.state.DurrationItem;
        var PriorityItem = this.state.PriorityItem;
        var selectedTOD = this.state.selectedTOD;
        var selectedHour = this.state.selectedHour;
        var WeekSchedule = this.state.WeekSchedule;

        const newHabit = {
            DateItem: DateItem,
            updateDateItem: updateDateItem,
            NameItem: NameItem,
            CategoryItems: CategoryItems,
            PriorityItem: PriorityItem,
            DifficultyItem: DifficultyItem,
            DurrationItem: DurrationItem,
            WeekSchedule: WeekSchedule,
            selectedTOD: selectedTOD,
            selectedHour: selectedHour,
            LinkItem: LinkItem

        }

        axios
            .post("/HabitNexus2", newHabit)
            .catch((error) => console.log(error));


        this.setState({
            HabitItem: '',
            newHabit: [],
            HabitList: this.state.HabitList.concat(newHabit)
        })

    }

    render() {

        const { newHabit } = this.state;

        return (
            <div>
                <h1>New Habit Form</h1>
                {/* <form action="/habits" method="POST" id="form"> */}
                <form id="form">
                    <ItemDate
                        DateItem={this.state.DateItem}
                    />
                    <ItemName
                        NameItem={this.state.NameItem}
                    />
                    <Category
                        CategoryItems={this.state.CategoryItems}
                    />
                    <Priority
                        PriorityItem={this.state.PriorityItem}
                    />
                    <Difficulty
                        DifficultyItem={this.state.DifficultyItem}
                    />
                    <Durration
                        DurrationItem={this.state.DurrationItem}
                    />
                    <WeekRepeat
                        WeekSchedule={this.state.WeekSchedule}
                    />
                    <TOD
                        selectedTOD={this.state.selectedTOD}

                    />
                    < Hours
                        selectedHour={this.state.selectedHour}
                    />
                    <AddLink
                        LinkItem={this.state.LinkItem}


                    />
                    <SubmitBTN
                        updateHabit={this.updateHabit}
                        saveHabit={this.saveHabit}
                    />
                </form>
            </div>
        );
    }
}

export default Form;