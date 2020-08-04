import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');
import Select from 'react-select';
var axios = require("axios");

var categories = require("../../data/categories");
// var formData = require("../../data/formData");


class Category extends React.Component {

    state = {
        PriorityState: "",
        LinkState: "",
        DateState: "",
        updateDateState: "",
        NameState: "",
        CategoryState: {
            value: "",
            label: ""
        },
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

    newHabit = this.state.newHabit

    handleChange5 = (CategoryState, newHabit) => {



        const { CategoryItems } = this.state.newHabit.CategoryItems

        this.setState({ CategoryState: CategoryState });
        console.log(`CategoryState: `, CategoryState);
        var value1 = CategoryState.value
        console.log(`valueA: `, value1);

        this.setState({ newHabit: { CategoryItems: value1 } });

        console.log(`newHabit: `, newHabit);
    };


    render() {

        const { CategoryState } = this.state.CategoryState;

        // const { label } = this.CategoryState.label;

        // const { value3 } = this.state.value3;

        const { newHabit } = this.state.newHabit;

        var { CategoryItems } = this.newHabit.CategoryItems;

        // console.log("newHabit: ", this.state.newHabit)

        // console.log("label: ", this.CategoryState.label)

        return (
            <div>
                <div>
                    <label htmlFor="CategoryItems">Category</label>
                    <Select
                        name="CategoryItems"
                        placeholder="Select a Category"
                        value={CategoryState}
                        onChange={this.handleChange5}
                        options={categories}
                    />
                </div>
                <div
                    style={{
                        color: 'red',
                        marginTop: '5px'
                    }}
                >
                    {this.state.validationError}
                </div>
            </div>
        );
    }
}

export default Category;