import React, { Component } from "react";
import "../style.css";
import Select from 'react-select';
var axios = require("axios");

var categories = require("../../data/categories");

var formData = require("../../data/formData");

class Category extends React.Component {

    state = {
        CategoryState: "",
    }

    componentDidMount() {

        formData[2] = "self-improvment"
    }

    valueA = "";

    handleChange5 = (CategoryState) => {


        this.setState({ CategoryState: CategoryState });
      
        var valueA = CategoryState.value

        formData[2] = valueA

        // console.log("formData: ", formData)

    }


    render() {

        const { CategoryState } = this.state.CategoryState;

        return (
            <div>
                <div>
                    <label htmlFor="CategoryItem">Category</label>
                    <Select
                        name="CategoryItem"
                        placeholder="Select a Category (Default is Self Improvment)"
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