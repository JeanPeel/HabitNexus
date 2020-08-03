import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

class UserName extends React.Component {

    state = {
        UserNameItem: ""
    };

    updateInputValue3 = g => {
        this.setState({ UserNameItem: g.target.value });
        console.log("UserNameItem: ", g.target.value )
    };

    

    render() {
        const { UserNameItem } = this.state;
   
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