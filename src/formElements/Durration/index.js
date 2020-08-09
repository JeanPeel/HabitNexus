import React, { Component } from "react";
import "../style.css";

var durrationData = require("../../data/durration");

class Durration extends React.Component {

    state = {
        DurrationState: "",
    }

    updateInputValue8 = r => {

        const value2 = r.target.id

        this.setState({ DurrationState: value2 });
    };



    render() {

        const { DurrationState } = this.state.DurrationState;

        durrationData.unshift(this.state.DurrationState)

        return (
            <div>
                <label htmlFor="DurrationItem" >Durration: </label>
                <fieldset name="DurrationItem">
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DurrationItem"
                        id="regular-upkeep-10min-or-less"
                        value={DurrationState}
                        onChange={this.updateInputValue8}
                    />
                    <label htmlFor="upkeep">Regular-Upkeep (1 hour or less)</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DurrationItem"
                        id="fast-task-30min-or-less"
                        value={DurrationState}
                        onChange={this.updateInputValue8}

                    />
                    <label htmlFor="task">Fast-Task (30 min or less)</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DurrationItem"
                        id="quick-bit-1hour-or-less"
                        value={DurrationState}
                        onChange={this.updateInputValue8}
                    />
                    <label htmlFor="bit">Quick-bit (10 mins or less)</label>
                </fieldset>
            </div>
        );
    }

}

export default Durration;

