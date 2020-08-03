import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
const moment = require('moment');

class ItemDate extends React.Component {

    DateItem = moment().format("MM/DD/YYYY")
        // now = moment();

        // console.log("AutoDate: ", AutoDate);
  

    state = {
        DateItem: ""
    };

    updateInputValue6 = k => {
        this.setState({ DateItem: k.target.value });
        console.log("DateItem: ", k.target.value )
    };




    render() {
        // var DateItem = moment().format("MM/DD/YYYY")
        var AutoDate = moment().format("MM/DD/YYYY")
        const { DateItem } = this.state;

    return (
        <div>
            <label htmlFor="DateItem" >Start Date is Today ({AutoDate}) <br/>or Change Start Date: </label>
            <input
                type="date"
                name="DateItem"
                value={DateItem}
                onChange={this.updateInputValue6}
                className="DateItem"
            />
        </div>
    );
}
}

export default ItemDate;

