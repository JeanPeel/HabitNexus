import React, { Component } from "react";
import { Alert } from "react";
import "../style.css";
import axios from "axios";

const moment = require('moment');

var formData = require("../../data/formData");


class SubmitBTN extends React.Component {

    state = {
        FormState: "",
    };

    updateInputValue = e => {

        e.preventDefault();

        console.log("update input value on Submit BTN called")

        // axios.get("/api/formData")
        //     .then(res => {
        //         for (var i = 0; i < friends.length; i++) {

        //             const dataObject = {
        //             id: "info"+[i],
        //             name: res.data[i]
        //             }
        //         }
        //     })

        axios.post("/api/formData", function (data) {

            console.log('axios post is called')

            for (var d = 0; d < formData.length; d++) {

                if (data.id[d] === "info0") {
                    var data0 = data.info[d]
                } else  if (data.id[d] === "info1") {
                    var data1 = data.info[d]
                } else  if (data.id[d] === "info2") {
                    var data2 = data.info[d]
                } else  if (data.id[d] === "info3") {
                    var data3 = data.info
                } else  if (data.id[d] === "info4") {
                    var data4 = data.info[d]
                } else  if (data.id[d] === "info5") {
                    var data5 = data.info[d]
                } else  if (data.id[d] === "info6") {
                    var data6 = data.info[d]
                } else  if (data.id[d] === "info7") {
                    var data7 = data.info[d]
                } else  if (data.id[d] === "info8") {
                    var data8 = data.info[d]
                } else  if (data.id[d] === "info9") {
                    var data9 = data.info[d]
                } else  if (data.id[d] === "info10") {
                    var data10 = data.info[d]
                } else if (data.id[d] === "info11") {
                    var data11 = data.info[d]
                } else  if (data.id[d] === "info12") {
                    var data12 = data.info[d]
                } else  if (data.id[d] === "info13") {
                    var data13 = data.info[d]
                } else  if (data.id[d] === "info14") {
                    var data14 = data.info[d]
                } else  if (data.id[d] === "info15") {
                    var data15 = data.info[d]
                } 
            }

            console.log("data 6: ", data6)

            var ADateData = ("Started Date: " + data0)
            var AItemData = ("Habit Item: " + data1)
            var ACategoryData = ("Category: " + data2)
            var APriorityData = ("Priority: " + data3)
            var ADifficultyData = ("Difficulty: " + data4)
            var ADurrationData = ("Durration: " + data5)
            var AWeekData = ("Weekday Repeat Schedule: " + data6 + ", "
                + data7 + ", "
                + data8 + ", "
                + data9 + ", "
                + data10 + ", "
                + data11 + ", "
                + data12)
            var AdTodData = ("Time Of Day: " + data13)
            var AHourData = ("Hour: " + data14)
            var ALinkInfo = ("Link to Info or Photo: " + data15)

            console.log("Mondays Data: ", data.Mon)

            console.log('A Week Data: ', AWeekData)

            if ( data1 === "none") {
                alert("Please fill out the Habit Item Name.")
            } else if (formData[6] === "none" &&
            data7 === "none" &&
            data8 === "none" &&
            data9 === "none" &&
            data10 === "none" &&
            data11 === "none" &&
            data12 === "none") {
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

        })
        .then((res) => {
            console.log(res.data)
          })
          .catch((error) => {
            console.error(error)
          })

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
