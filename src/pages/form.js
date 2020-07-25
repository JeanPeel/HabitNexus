import React, { Component } from "react";
import "./style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

import AddLink from "../subComponents/AddLink";
import Category from "../subComponents/Category";
import Durration from "../subComponents/Durration";
import ItemName from "../subComponents/ItemName";
import Priority from "../subComponents/Priority";
import SubmitBTN from "../subComponents/SubmitBTN";
import TOD from "../subComponents/TOD";
import WeekRepeat from "../subComponents/WeekRepeat";
import ItemDate from "../subComponents/ItemDate";
import Difficulty from "../subComponents/Difficulty";

class Form extends Component {
    // state = {

    // }


    render() {

        return (
            <div>
                <h1>New Habit Form</h1>
                {/* <form action="/habits" method="POST" id="form"> */}
                <form id="form">
                    <ItemDate />
                    <ItemName/>
                    <Category/>
                    <Priority/>
                    <Difficulty/>
                    <Durration/>
                    <WeekRepeat/>
                    <TOD/>
                    <AddLink/>
                    <SubmitBTN/>
                </form>
            </div>
        );
    }
}

export default Form;