import React, { Component } from "react";
import "./style.css";
import axios from 'axios';
// import Moment from 'react-moment';
// import 'moment-timezone';

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

// var formData = require("../../data/formData");

var LinkItem = "";
var DateItem = "";
var updateDateItem = "";
var NameItem = "";
var CategoryItems = "";
var DifficultyItem = "";
var DurrationItem = "";
var PriorityItem = "";
var selectedTOD = "";
var selectedHour = "";
var WeekSchedule = "";

const moment = require('moment');

class Form extends Component {
    state = {
        HabitItem: '',
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
        FormState: "",
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

    updateHabit = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    saveHabit = (event) => {

        event.preventDefault();

        // var LinkItem = this.state.LinkItem;
        // var DateItem = this.state.DateItem;
        // var updateDateItem = this.state.DateItem;
        // var NameItem = this.state.NameItem;
        // var CategoryItems = this.state.CategoryItems;
        // var DifficultyItem = this.state.DifficultyItem;
        // var DurrationItem = this.state.DurrationItem;
        // var PriorityItem = this.state.PriorityItem;
        // var selectedTOD = this.state.selectedTOD;
        // var selectedHour = this.state.selectedHour;
        // var WeekSchedule = this.state.WeekSchedule;

        const newHabit = {
            PriorityItem: this.state.newHabit.PriorityItem,
            LinkItem: this.state.newHabit.LinkItem,
            DateItem: this.state.newHabit.DateItem,
            NameItem: this.state.newHabit.NameItem,
            CategoryItems: this.state.newHabit.CategoryItems,
            DifficultyItem: this.state.newHabit.DifficultyItem,
            DurrationItem: this.state.newHabit.DurrationItem,
            PriorityItem: this.state.newHabit.PriorityItem,
            selectedTOD: this.state.newHabit.selectedTOD,
            selectedHour: this.state.newHabit.selectedHour,
            WeekSchedule: this.state.newHabit.WeekSchedule
        }

        axios
            .post("/HabitNexus2", newHabit)
            .catch((error) => console.log(error));


        this.setState({
            HabitItem: '',
            newHabit: [],
        })

    }

    render() {

        var AutoDate = moment().format("MM/DD/YYYY")

        const { FormState } = this.state.FormState;
        const { LinkState } = this.state.LinkState;
        const { CategoryState } = this.state.CategoryState;
        const { DifficultyState } = this.state.DifficultyState;
        const { DurrationState } = this.state.DurrationState;
        const { HourState } = this.state.HourState;
        const { DateState } = this.state.DateState;
        const { NameState } = this.state.NameState;
        const { PriorityState } = this.state.PriorityState;
        const { TODState } = this.state.TODState;
        const { WeekState } = this.state.WeekState;

        const { newHabit } = this.state.newHabit;

        const { LinkItem } = this.state.newHabit.LinkItem;
        var { CategoryItems } = this.state.newHabit.CategoryItems;
        const { DifficultyItem } = this.state.newHabit.DifficultyItem;
        const { DurrationItem } = this.state.newHabit.DurrationItem;
        var { selectedHour } = this.state.newHabit.selectedHour;
        const { DateItem } = this.state.newHabit.DateItem
        const { NameItem } = this.state.newHabit.NameItem;
        const { PriorityItem } = this.state.newHabit.PriorityItem;
        const { selectedTOD } = this.state.newHabit.selectedTOD
        const { WeekSchedule } = this.state.newHabit.WeekSchedule;

        console.log("newHabit: ", this.state.newHabit)

        return (
            <div>
                <h1>New Habit Form</h1>
                {/* <form action="/habits" method="POST" id="form"> */}
                <form id="form">
                    <ItemDate
                        DateState={this.state.DateState}
                        DateItem={this.state.newHabit.DateItem}
                    />
                    <ItemName
                        NameState={this.state.NameState}
                        NameItem={this.state.newHabit.NameItem}
                    />
                    <Category
                        CategoryState={this.state.CategoryState}
                        CategoryItems={this.state.newHabit.CategoryItems}
                    />
                    <Priority
                        PriorityState={this.state.PriorityState}
                        PriorityItem={this.state.newHabit.PriorityItem}
                    />
                    <Difficulty
                        DifficultyState={this.state.DifficultyState}
                        DifficultyItem={this.state.newHabit.DifficultyItem}
                    />
                    <Durration
                        DurrationState={this.state.DurrationState}
                        DurrationItem={this.state.newHabit.DurrationItem}
                    />
                    <WeekRepeat
                        WeekState={this.state.WeekState}
                        WeekSchedule={this.state.newHabit.WeekSchedule}
                    />
                    <TOD
                        TODState={this.state.TODState}
                        selectedTOD={this.state.newHabit.selectedTOD}

                    />
                    < Hours
                        HourState={this.state.HourState}
                        selectedHour={this.state.newHabit.selectedHour}
                    />
                    <AddLink
                        LinkState={this.state.LinkState}
                        LinkItem={this.state.newHabit.LinkItem}


                    />
                    <SubmitBTN
                        newHabit={this.state.newHabit}
                        updateHabit={this.updateHabit}
                        saveHabit={this.saveHabit}
                        FormState={this.state.FormState}
                    />
                </form>
            </div>
        );
    }
}

export default Form;