import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

class ItemName extends React.Component {
    state = {
        NameItem: "unchanged",
    };

    updateNameItem = NameItem => {
        this.setState({ NameItem });
        console.log(`NameItem:`, NameItem);
    };

    render() {
        const { NameItem } = this.state;

        return (
            <div>
                <label htmlFor="NameItem">Item Name: </label>
                <input
                    type="text"
                    name="NameItem"
                    value={NameItem}
                    onChange={this.updateNameItem}
                    placeholder="Add Item Name"
                    className="nameItem"
                />
            </div>
        );
    }
}

export default ItemName;