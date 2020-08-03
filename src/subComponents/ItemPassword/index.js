import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

class ItemPassword extends React.Component {

    state = {
        PasswordItem: ""
    };

    updateInputValue4 = h => {
        this.setState({ PasswordItem: h.target.value });
        console.log("PasswordItem: ", h.target.value )
    };

    

    render() {
        const { PasswordItem } = this.state;
   
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