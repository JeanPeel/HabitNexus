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
        CategoryItems: "",
    };

    handleChange5 = CategoryItems => {
        this.setState({ CategoryItems });
        console.log(`CategoryItems: `, CategoryItems);
    };

    // updateInputValue6 = j => {
    //     this.setState({ CategoryItems: j.target.value });
    //     console.log("CategoryItems: ", j.target.value )
    // };

    

    render() {
        const { CategoryItems } = this.state;

        return (
            <div>
                <div>
                    <label htmlFor="CategoryItems">Category</label>
                    <Select
                        name="CategoryItems"
                        placeholder="Select a Category"
                        value={CategoryItems}
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