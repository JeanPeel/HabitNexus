import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

class Difficulty extends React.Component {

    state = {
        DifficultyItem: "unchanged",
    };

    updateDifficultyItem = DifficultyItem => {
        this.setState({ DifficultyItem });
        console.log(`DifficultyItem:`, DifficultyItem)
    };

    render() {

        const { DifficultyItem } = this.state;

        return (
            <div>
                <label htmlFor="DifficultyItem" >Difficulty Level: </label>
                <fieldset name="DifficultyItem">
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DifficultyItem"
                        value="difficult"
                        onChange={this.updateDifficultyItem }
                    />
                    <label htmlFor="difficult">Difficult</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DifficultyItem"
                        value="moderate"
                        onChange={this.updateDifficultyItem}
                    />
                    <label htmlFor="moderate">Moderate</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DifficultyItem"
                        value="easy"
                        onChange={this.updateDifficultyItem }
                    />
                    <label htmlFor="easy">Easy</label>
                </fieldset>
            </div>
        );
    }
}

export default Difficulty;