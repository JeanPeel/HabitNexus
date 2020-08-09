import React, { Component } from "react";
import "../style.css";

var formData = require("../../data/formData");

class Durration extends React.Component {

    state = {
        DurrationState: "",
    }

    componentDidMount() {

        formData[5] = "fast-task-30min-or-less"
    }

    updateInputValue8 = r => {

        const value11 = r.target.id

        this.setState({ DurrationState: value11 });

        formData[5] = value11

    };



    render() {

        const { DurrationState } = this.state.DurrationState;

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
                    <label htmlFor="task">Fast-Task (Default) (30 min or less)</label>
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

