import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

export default function UserName(props) {

    var UserNameItem = props.UserNameItem;
    var updateUNItem = props.USerNameItem;

    console.log(`UserNameItem:`, UserNameItem);
   
        return (
            <div>
                <label htmlFor="UserNameItem">User Name: </label>
                <input
                    type="text"
                    name="UserNameItem"
                    value={UserNameItem}
                    onChange={updateUNItem}
                    placeholder="Add User Name"
                    className="userNameItem"
                />
            </div>
         );
        }