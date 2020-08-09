import React, { Component } from "react";
import "../style.css";

var formData = require("../../data/formData");


class Difficulty extends React.Component {

    state = {
        DifficultyState: "",
    }

    componentDidMount() {

        formData[4] = "moderate"
    }


    updateInputValue7 = l => {

        const value1 = l.target.id

        this.setState({ DifficultyState: value1 });

        formData[4] = value1

    };



    render() {

        const { DifficultyState } = this.state.DifficultyState;
   
        return (
            <div>
                <label htmlFor="DifficultyItem" >Difficulty Level: </label>
                <fieldset name="DifficultyItem">
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DifficultyItem"
                        id="difficult"
                        value={DifficultyState}
                        onChange={this.updateInputValue7}
                    />
                    <label htmlFor="difficult">Difficult</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DifficultyItem"
                        id="moderate"
                        value={DifficultyState}
                        onChange={this.updateInputValue7}

                    />
                    <label htmlFor="moderate">Moderate (Default)</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DifficultyItem"
                        id="easy"
                        value={DifficultyState}
                        onChange={this.updateInputValue7}
                    />
                    <label htmlFor="easy">Easy</label>
                </fieldset>
            </div>
        );
    }

}

export default Difficulty;
