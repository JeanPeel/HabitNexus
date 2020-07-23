import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');
import Select from 'react-select';
var axios = require("axios");

// var categories = require("../../data/categories");


class Category extends Component {

    // categoriesFromApi= [];
    // selectedCategory= "";

    state = {
        categoriesSet: [],
        selectedCategory: "",
        validationError: ""
    };

    componentDidMount() {
        axios
        .get('/api/categories')
            .then((response) => {
                return response.json();
                console.log("recieved response.json")
            })
            .then(data => {
                let categoriesFromApi = data.map((categoryValue, categoryLabel) => {
                    return { value: categoryValue, label: categoryLabel }
                });
                this.setState({
                    categoriesSet: [
                        {
                            value: '',
                            label: '(Select a Category)'
                        }
                    ].concat(categoriesFromApi)
                });
            }).catch(error => {
                console.log("Category Error: ", error);
            });
    }

    render() {
        return (
            <div>
                <div>
                    <label htmlFor="categoryItems">Category</label>
                    <select
                        name="categoryItems"
                        placeholder="Select a Category"
                        value={this.state.selectedCategory}
                        onChange={(e) =>
                            this.setState({
                                selectedCategory: e.target.value,
                                validationError:
                                    e.target.value === ""
                                        ? "You must select your favourite team"
                                        : ""
                            })
                        }
                    >
                        {this.state.categoriesSet.map((categoryValue, categoryLabel) => (
                            <option
                                key={categoryValue.value}
                                value={categoryValue.value}
                            >
                                {categoryLabel.label}
                            </option>
                        ))}
                    </select>
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