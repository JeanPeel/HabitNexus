import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');
import Select from 'react-select';

var categories = require("../../data/categories");


class Category extends React.Component {
    state = {
        selectedCategory: null,
    };
    handleChange = selectedCategory => {
        this.setState({ selectedCategory });
        console.log(`Category selected:`, selectedCategory);
    };
    render() {
        const { selectedCategory } = this.state;

        return (
            <div>
                <label htmlFor="category">Category</label>
                <Select
                    name="category"
                    value={selectedCategory}
                    onChange={this.handleChange}
                    options={categories}
                />
            </div>
        );
    }
}

export default Category;