import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

export default function ItemName(props) {

    var NameItem = props.NameItem;
    var updateNameItem = props.NameItem;

    console.log(`NameItem:`, NameItem);
   
        return (
            <div>
                <label htmlFor="NameItem">Item Name: </label>
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