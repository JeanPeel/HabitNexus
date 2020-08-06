import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

var formData = require("../../data/formData");

class ItemPassword extends React.Component {

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


    updateInputValue4 = h => {

        const value6 = h.target.value

        this.setState({ PasswordState: value6 });

        this.setState({ newUser: { PasswordItem: value6 } });
    };



    render() {
        const { PasswordState } = this.state.PasswordState;

        const { newUser } = this.state.newUser;

        const { PasswordItem } = this.state.newUser.PasswordItem;

        formData.push("PasswordState: " + this.state.PasswordState)

        // console.log("newUser on Password: ", this.state.newUser)

        return (
            <div>
                <label htmlFor="PasswordItem">Password: </label>
                <input
                    type="password"
                    id="Password"
                    name="PasswordItem"
                    value={PasswordItem}
                    onChange={this.updateInputValue4}
                    placeholder="Add Password"
                    className="passwordItem"
                    required />
            </div>
        );
    }
}

export default ItemPassword;