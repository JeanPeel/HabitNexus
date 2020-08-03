import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

class Difficulty extends React.Component {

    state = {
        DifficultyItem: ""
    };

    updateInputValue7 = l => {
        this.setState({ DifficultyItem: l.target.id });
        console.log("DifficultyItem: ", l.target.id )
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
                        id="difficult"
                        value={DifficultyItem}
                        onChange={this.updateInputValue7}
                    />
                    <label htmlFor="difficult">Difficult</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DifficultyItem"
                        id="moderate"
                        value={DifficultyItem}
                        onChange={this.updateInputValue7}
            
                    />
                    <label htmlFor="moderate">Moderate</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DifficultyItem"
                        id="easy"
                        value={DifficultyItem}
                        onChange={this.updateInputValue7}
                    />
                    <label htmlFor="easy">Easy</label>
                </fieldset>
            </div>
        );
    }

}

export default Difficulty;
