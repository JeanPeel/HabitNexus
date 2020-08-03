import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

var formData = require("../../data/formData");

export default function SubmitBTN(props) {

    var LinkItem = props.LinkItem;

    var DateItem = props.DateItem;

    var updateDateItem = props.DateItem;

    var NameItem = props.NameItem;

    const saveLink = props.saveLink;

    var HabitItem = {
        Date: DateItem,
        Date2: updateDateItem,
        Item: NameItem,
        Link: LinkItem
    }

    formData =[]

    let formProps = (props.form)

    formData.push(formProps);
    
    console.log("form data: ", formData)

    // const saveProps = props.saveProps;
    // console.log("Saving Props: ", props.saveProps);

        return (
            <div>
                <button 
                type="submit" 
                onClick={formData.push(formProps), console.log("form Props: ", formProps), console.log("HabitItem: ", HabitItem), saveLink} 
                className="submitBTN" 
                form="form" 
                value={props.form}
                >Submit</button>
            </div >
        );
    }


