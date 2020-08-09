import React, { Component } from "react";
import { Alert } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
const moment = require('moment');

var categoryData = require("../../data/category");
var dateData = require("../../data/date");
var difficultyData = require("../../data/difficulty");
var durrationData = require("../../data/durration");
var hourData = require("../../data/hour");
var itemData = require("../../data/item");
var priorityData = require("../../data/priority");
var todData = require("../../data/tod");
var weekData = require("../../data/weekdays");
var linkInfo = require("../../data/linkinfo");

class SubmitBTN extends React.Component {

    state = {
        FormState: "",
    };


    updateInputValue = e => {

        e.preventDefault();

        var ADateData = ("dateData: " + dateData[0])
        var AItemData = ("itemData: " + itemData[0])
        var ACategoryData = ("categoryData: " + categoryData[0])
        var APriorityData = ("priorityData: " + priorityData[0])
        var ADifficultyData = ("difficultyData: " + difficultyData[0])
        var ADurrationData = ("durrationData: " + durrationData[0])
        var AWeekData = ("weekData: " + weekData)
        var AdTodData = ("todData: " + todData[0])
        var AHourData = ("hourData: " + hourData[0])
        var ALinkInfo = ("linkInfo: " + linkInfo[0])

    alert(

            ADateData + "\n" 
            + AItemData + "\n " 
            + ACategoryData + "\n " 
            + APriorityData + "\n " 
            + ADifficultyData + "\n " 
            + ADurrationData + "\n " 
            + AWeekData + "\n " 
            + AdTodData + "\n " 
            + AHourData + "\n " 
            + ALinkInfo 

        )

    };

render() {

    const { FormState } = this.state.FormState;

    return (
        <div>
            <button
                type="submit"
                onClick={

                    this.updateInputValue

                }
                className="submitBTN"
                form="form"
                value={FormState}

            >Submit</button>
        </div >
    );
}

}

export default SubmitBTN;
