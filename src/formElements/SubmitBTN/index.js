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

var formData = require("../../data/formData");

class SubmitBTN extends React.Component {

    state = {
        FormState: "",
    };

    // componentDidMount() {
    //     formData = [
    //         "none",
    //         "none",
    //         "none",
    //         "none",
    //         "none",
    //         "none",
    //         "none",
    //         "none",
    //         "none",
    //         "none",
    //         "none",
    //         "none",
    //         "none",
    //         "none",
    //         "none"
    //     ]
    // }

    updateInputValue = e => {

        e.preventDefault();

        var ADateData = ("dateData: " + formData[0])
        var AItemData = ("itemData: " + formData[1])
        var ACategoryData = ("categoryData: " + formData[2])
        var APriorityData = ("priorityData: " + formData[3])
        var ADifficultyData = ("difficultyData: " + formData[4])
        var ADurrationData = ("durrationData: " + formData[5])
        var AWeekData = ("weekData: " + formData[6] + ", "
            + formData[7] + ", "
            + formData[8] + ", "
            + formData[9] + ", "
            + formData[10] + ", "
            + formData[11] + ", "
            + formData[12])
        var AdTodData = ("todData: " + formData[13])
        var AHourData = ("hourData: " + formData[14])
        var ALinkInfo = ("linkInfo: " + formData[15])

        if (formData[1] === "none") {
            alert("Please fill out the Habit Item Name")
        } else {
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
        }

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
