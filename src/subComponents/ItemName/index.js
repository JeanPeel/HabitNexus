import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

export default function ItemName(props) {

    const NameItem = props.NameItem;
    const updateNameItem = props.updateNameItem;

    console.log(`Name Item:`, NameItem);
    console.log(`Update Name Item:`, updateNameItem);

    return (
        <div>
            <label for="NameItem">Item Name: </label>
            <input 
            type="text"
            name="NameItem" 
            value={NameItem} 
            onChange={updateNameItem} 
            placeholder="Add Item Name" 
            className="nameItem" 
            />
        </div>
    );
}