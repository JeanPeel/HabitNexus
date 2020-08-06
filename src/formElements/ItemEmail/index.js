import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

var formData = require("../../data/formData");


class ItemEmail extends React.Component {

    state = {
        UserState: "",
        EmailState: "",
        PasswordState: "",
        newUser: {
            UserNameItem: "",
            EmailItem: "",
            PasswordItem: ""
        }
    };

    updateInputValue5 = i => {

        const value4 = i.target.value

        this.setState({ EmailState: value4 });

        this.setState({ newUser: { EmailItem: value4 } });
    };



    render() {
        const { EmailState } = this.state.EmailState;

        const { newUser } = this.state.newUser;

        const { EmailItem } = this.state.newUser.EmailItem;

        // formData.push("EmailState: " + this.state.EmailState)
        // formData.unshift("EmailState: " + this.state.EmailState)
        formData.unshift(this.state.EmailState)
        formData.pop()

        // console.log("newUser on Item Email: ", this.state.newUser)

        return (
            <div>
                <label htmlFor="EmailItem">Email Name: </label>
                <input
                    type="email"
                    id="email"
                    name="EmailItem"
                    value={EmailItem}
                    onChange={this.updateInputValue5}
                    placeholder="Add Email Address"
                    className="emailItem"
                    required />
            </div>
        );
    }

}

export default ItemEmail;