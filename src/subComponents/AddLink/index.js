import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

// var SubmitBTN = require('../SubmitBTN');

// import Select from 'react-select';

class AddLink extends React.Component {

    state = {
        LinkItem: ""
    };

    updateInputValue = e => {
        this.setState({ LinkItem: e.target.value });
        console.log("LinkItem: ", e.target.value)
    };



    render() {
        const { LinkItem } = this.state;

        return (
            <div>
                <label htmlFor="LinkItem" >Add Link to info or image (optional): </label>
                <input
                    type="url"
                    name="LinkItem"
                    value={LinkItem}
                    placeholder="Add a Link Here"
                    className="linkItem"
                    onChange={this.updateInputValue}
                />
            </div>
        );
    }
}

export default AddLink;