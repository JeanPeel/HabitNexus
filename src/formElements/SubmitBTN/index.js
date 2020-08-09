import React, { Component } from "react";
import { Alert } from "react";
import "../style.css";

const moment = require('moment');

var formData = require("../../data/formData");

class SubmitBTN extends React.Component {

    state = {
        FormState: "",
    };

    updateInputValue = e => {

        e.preventDefault();

        var ADateData = ("Started Date: " + formData[0])
        var AItemData = ("Habit Item: " + formData[1])
        var ACategoryData = ("Category: " + formData[2])
        var APriorityData = ("Priority: " + formData[3])
        var ADifficultyData = ("Difficulty: " + formData[4])
        var ADurrationData = ("Durration: " + formData[5])
        var AWeekData = ("Weekday Repeat Schedule: " + formData[6] + ", "
            + formData[7] + ", "
            + formData[8] + ", "
            + formData[9] + ", "
            + formData[10] + ", "
            + formData[11] + ", "
            + formData[12])
        var AdTodData = ("Time Of Day: " + formData[13])
        var AHourData = ("Hour: " + formData[14])
        var ALinkInfo = ("Link to Info or Photo: " + formData[15])

        if (formData[1] === "none") {
            alert("Please fill out the Habit Item Name.")
        } else if (formData[6] === "none" &&
        formData[7] === "none" &&
        formData[8] === "none" &&
        formData[9] === "none" &&
        formData[10] === "none" &&
        formData[11] === "none" &&
        formData[12] === "none") {
            alert("Please fill the weekly repeat schedule.")
        } 
        else {
            alert(

                "Please look at the Habit Data Submitted to verify that it is correct."
                + "\n"
                + "\n " +
                ADateData + "\n "
                + AItemData + "\n "
                + "\n "
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
