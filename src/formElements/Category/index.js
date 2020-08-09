import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');
import Select from 'react-select';
var axios = require("axios");

var categories = require("../../data/categories");
// var formData = require("../../data/formData");

var categoryData = require("../../data/category");

class Category extends React.Component {

    state = {
        CategoryState: "",
    }

    valueA = "";

    handleChange5 = (CategoryState) => {


        this.setState({ CategoryState: CategoryState });
      
        var valueA = CategoryState.value

    }


    render() {

        const { CategoryState } = this.state.CategoryState;

        categoryData.unshift(this.state.CategoryState.value)

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