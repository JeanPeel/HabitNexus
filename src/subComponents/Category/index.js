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

    newHabit = this.state.newHabit;
    CategoryItems = this.state.newHabit.CategoryItems;
    valueA = "";

    handleChange5 = (CategoryState) => {

        const newHabit = this.state.newHabit

        const { CategoryItems } = this.newHabit.CategoryItems;

        this.setState({ CategoryState: CategoryState });
        console.log(`CategoryState: `, CategoryState);
        var valueA = CategoryState.value
        console.log(`valueA: `, valueA);

        this.setState({ newHabit: { CategoryItems: CategoryState.value } });

        this.setState({ CategoryItems: CategoryState.value });

        console.log(`CategoryItems: `, CategoryItems);

    }


    render() {

        const { CategoryState } = this.state.CategoryState;

        const { newHabit } = this.state.newHabit;

        var { CategoryItems } = this.state.newHabit.CategoryItems;

        console.log("newHabit: ", this.state.newHabit)

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