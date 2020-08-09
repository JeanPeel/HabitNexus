import React, { Component } from "react";
import "../style.css";
const moment = require('moment');

var dateData = require("../../data/date");

class ItemDate extends React.Component {

    state = {
        DateState: "",
    }

    componentDidMount() {
        var AutoDate = moment().format("MM/DD/YYYY")
        dateData.push(AutoDate)
    }

    updateInputValue6 = k => {

        const value8 = k.target.value

        this.setState({ DateState: value8 });
    };




    render() {
  
        var AutoDate = moment().format("MM/DD/YYYY")

        const { DateState } = this.state.DateState;

        dateData.unshift(this.state.DateState)

        return (
            <div>
                <label htmlFor="DateItem" >Start Date is Today ({AutoDate}) <br />or Change Start Date: </label>
                <input
                    type="date"
                    name="DateItem"
                    value={DateState}
                    onChange={this.updateInputValue6}
                    className="DateItem"
                />
            </div>
        );
    }
}

export default ItemDate;

