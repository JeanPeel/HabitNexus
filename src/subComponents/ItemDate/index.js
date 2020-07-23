import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
const moment = require('moment');

export default function ItemDate(props) {

    const DateItem = props.DateItem;
    const updateDateItem = props.updateDateItem;
    let now = moment();
    console.log(now.format());

    return (
        <div>
            <label for="DateItem" >Start Date:</label>
            <input
                type="date"
                name="DateItem"
                value={DateItem}
                onChange={updateDateItem}
                placeholder="now.format()"
                className="DateItem"
            />
        </div>
    );
}