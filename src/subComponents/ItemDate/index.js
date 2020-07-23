import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
const moment = require('moment');

class ItemDate extends React.Component {

    state = {
        DateItem: "unchanged",
    };

    updateDateItem = DateItem => {
        this.setState({ DateItem });
        console.log(`DateItem:`, DateItem)
    };

    render() {
        const { DateItem } = this.state;

    return (
        <div>
            <label htmlFor="DateItem" >Start Date:</label>
            <input
                type="date"
                name="DateItem"
                value={DateItem}
                onChange={this.updateDateItem}
                placeholder="now.format()"
                className="DateItem"
            />
        </div>
    );
}
}

export default ItemDate;