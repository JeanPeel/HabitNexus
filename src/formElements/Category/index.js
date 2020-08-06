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
        HabitItem: '',
        linkstate : "",
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

    newHabit = this.state.newHabit;
    CategoryItems = this.state.newHabit.CategoryItems;
    valueA = "";

    handleChange5 = (CategoryState) => {

        const newHabit = this.state.newHabit

        const { CategoryItems } = this.newHabit.CategoryItems;

        this.setState({ CategoryState: CategoryState });
        console.log(`CategoryState on Category: `, CategoryState);
        var valueA = CategoryState.value
        console.log(`valueA on Category: `, valueA);

        this.setState({ newHabit: { CategoryItems: CategoryState.value } });

        this.setState({ CategoryItems: CategoryState.value });

        console.log(`CategoryItems on Category: `, CategoryItems);

    }


    render() {

        const { CategoryState } = this.state.CategoryState;

        const { newHabit } = this.state.newHabit;

        var { CategoryItems } = this.state.newHabit.CategoryItems;

        console.log("newHabit on Category: ", this.state.newHabit)

        return (
            <div>
                <div>
                    <label htmlFor="CategoryItem">Category</label>
                    <Select
                        name="CategoryItem"
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