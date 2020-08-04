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
    CategoryItems  = this.state.newHabit.CategoryItems;
    value1 = ""

    handleChange5 = (CategoryState) => {

        const newHabit = this.state.newHabit

        const { CategoryItems } = this.newHabit.CategoryItems;

        this.setState({ CategoryState: CategoryState });
        console.log(`CategoryState: `, CategoryState);
        var value1 = CategoryState.value
        console.log(`valueA: `, value1);

        // console.log(`newHabit1: `, newHabit);

        // console.log(`CategoryItems1: `, CategoryItems);

        this.setState({ newHabit: { CategoryItems: CategoryState.value } });

        this.setState({CategoryItems: CategoryState.value});

        console.log(`newHabit2: `, newHabit);

        console.log(`CategoryItems2: `, CategoryItems);

    
            // newHabit: {
            //     CategoryItems: value1}
            
    }

    // state = {
    //     CategoryState: {
    //         value: value1,
    //         label: ""
    //     },
    //     newHabit: {
    //         CategoryItems: value1,
    //     }
    // }


    // this.setState({ newHabit: { CategoryItems: value1 } });

    // this.setState({CategoryItems: value1});


    render() {

        const { CategoryState } = this.state.CategoryState;

        // const { label } = this.CategoryState.label;

        // const { value3 } = this.state.value3;

        const { newHabit } = this.state.newHabit;

        var { CategoryItems } = this.state.newHabit.CategoryItems;

        // console.log("newHabit: ", this.state.newHabit)

        // console.log("label: ", this.CategoryState.label)

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