import React, { Component } from "react";
import "../style.css";

var formData = require("../../data/formData");

class Priority extends React.Component {

    state = {
        PriorityState: "",
    }

    componentDidMount() {

        formData[3] = "medium"
    }

    updateInputValue9 = m => {

        const value12 = m.target.id

        this.setState({ PriorityState: value12 });

        formData[3] = value12
    };



    render() {

        const { PriorityState } = this.state.PriorityState;

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
                    <label htmlFor="medium">Medium (Default)</label>
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
