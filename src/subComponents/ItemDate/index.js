import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
const moment = require('moment');

export default function ItemDate(props) {

    let now = moment();
    var DateItem = now.format("MM/DD/YYYY")
    const AutoDate = now.format("MM/DD/YYYY")
    console.log("AutoDate: ", AutoDate);

    var DateItem = props.DateItem;
    var updateDateItem = props.DateItem;

    // updateDateItem = DateItem => {
    //     this.setState({ DateItem });
        console.log(`DateItem:`, DateItem)
    // };

    return (
        <div>
            <label htmlFor="DateItem" >Start Date is Today ({AutoDate}) <br/>or Change Start Date: </label>
            <input
                type="date"
                name="DateItem"
                value={DateItem}
                onChange={updateDateItem}
                className="DateItem"
            />
        </div>
    );
}


