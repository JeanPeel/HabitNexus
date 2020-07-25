import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

export default function ItemEmail(props) {

    var EmailItem = props.EmailItem;
    var updateEmailItem = props.EmailItem;

    console.log(`EmailItem:`, EmailItem);
   
        return (
            <div>
                <label htmlFor="EmailItem">Email Name: </label>
                <input
                    type="email"
                    id="email"
                    name="EmailItem"
                    value={EmailItem}
                    onChange={updateEmailItem}
                    placeholder="Add Email Address"
                    className="emailItem"
                    required />
            </div>
         );
        }