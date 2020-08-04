import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

class UserName extends React.Component {

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


    updateInputValue3 = g => {

        const value5 = g.target.value

        this.setState({ UserState: value5});

        this.setState({ newUser: {  UserNameItem: value5 } });
    };



    render() {
        const { UserState } = this.state.UserState ;

        const { newUser } = this.state.newUser;

        const { UserNameItem } = this.state.newUser.UserNameItem;

        console.log("newUser: ", this.state.newUser)

        return (
            <div>
                <label htmlFor="UserNameItem">User Name: </label>
                <input
                    type="text"
                    name="UserNameItem"
                    value={UserNameItem}
                    onChange={this.updateInputValue3}
                    placeholder="Add User Name"
                    className="userNameItem"
                />
            </div>
        );
    }
}

export default UserName;