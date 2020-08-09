import React, { Component } from "react";
import "../style.css";

var priorityData = require("../../data/priority");

class Priority extends React.Component {

    state = {
        PriorityState: "",
    }

    updateInputValue9 = m => {

        const value1 = m.target.id

        this.setState({ PriorityState: value1 });
    };



    render() {

        const { PriorityState } = this.state.PriorityState;

        priorityData.unshift(this.state.PriorityState)   

        return (
            <div>
                <label htmlFor="PriorityItem" >Priority: </label>
                <fieldset name="PriorityItem">
                    <input
                        type="radio"
                        className="radioBTN"
                        name="PriorityItem"
                        id="high"
                        value={PriorityState}
                        onChange={this.updateInputValue9}
                    />
                    <label htmlFor="high">High</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="PriorityItem"
                        id="medium"
                        value={PriorityState}
                        onChange={this.updateInputValue9}

                    />
                    <label htmlFor="medium">Medium</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="PriorityItem"
                        id="low"
                        value={PriorityState}
                        onChange={this.updateInputValue9}
                    />
                    <label htmlFor="low">Low</label>
                </fieldset>
            </div>
        );
    }

}

export default Priority;
