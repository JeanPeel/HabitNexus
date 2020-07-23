import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

export default function AddLink(props) {

    const LinkItem = props.LinkItem;
    const updateLinkItem = props.updateLinkItem;

    return (
        <div>
        <label for="LinkItem" >Add Link to info or image (optional): </label>
        <input 
        type="url" 
        name="LinkItem" 
        value={LinkItem} 
        onChange={updateLinkItem} 
        placeholder="Add a Link Here" 
        className="linkItem"
        />
    </div>
    );
}