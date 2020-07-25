import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

export default function ItemPassword(props) {

    var PasswordItem = props.PasswordItem;
    var updatePasswordItem = props.PasswordItem;

    console.log(`PasswordItem:`, PasswordItem);
   
        return (
            <div>
                <label htmlFor="PasswordItem">Password: </label>
                <input
                    type="password"
                    id="Password"
                    name="PasswordItem"
                    value={PasswordItem}
                    onChange={updatePasswordItem}
                    placeholder="Add Password"
                    className="passwordItem"
                    required />
            </div>
         );
        }