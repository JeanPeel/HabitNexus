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

    handleChange5 = CategoryState => {
        this.setState({ CategoryState });
        console.log(`CategoryState: `, CategoryState);

    };

    // handleChange5 = Value3 => {

    //     this.setState({ newHabit: { CategoryItems: Value3 } });

    // };

    // updateInputValue9 = Value3 => {

    //     this.setState({ newHabit: { CategoryItems : Value3 } });

    // };



    render() {

        const { CategoryState } = this.state.CategoryState;

        // const { label } = this.CategoryState.label;

        // const { CategoryState } = this.state.CategoryState;

        // const { newHabit } = this.state.newHabit;

        // const { CategoryItems } = this.newHabit.CategoryItems;

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
                        onChange={this.handleChange5 }
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