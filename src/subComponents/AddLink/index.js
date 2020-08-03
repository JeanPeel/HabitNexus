import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

// var SubmitBTN = require('../SubmitBTN');

export default function AddLink(props) {

    var LinkItem = props.LinkItem;
    const updateLink = props.updateLink;
    const saveLink = props.saveLink;

    console.log(`LinkItem:`, LinkItem);


    return (
        <div>
            <label htmlFor="LinkItem" >Add Link to info or image (optional): </label>
            <input
                type="url"
                name="LinkItem"
                value={LinkItem}
                placeholder="Add a Link Here"
                className="linkItem"
                onChange={updateLink, console.log('Update Link Item: ', updateLink)}
            />
        </div>
    );
}