import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

class ItemName extends React.Component {

    state = {
        NameItem: ""
    };

    updateInputValue2 = f => {
        this.setState({ NameItem: f.target.value });
        console.log("NameItem: ", f.target.value )
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
                    placeholder="Add Item Name"
                    className="nameItem"
                    onChange={this.updateInputValue2}
                />
            </div>
         );
        }

    }

    export default ItemName;