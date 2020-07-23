import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

class Durration extends React.Component {

    state = {
        DurrationItem: null,
    };

    updateDurrationItem = DurrationItem => {
        this.setState({ DurrationItem });
        console.log(`DDurrationItem:`, DurrationItem)
    };

    render() {

        const { DurrationItem } = this.state;

        return (
            <div>
                <label htmlFor="DurrationItem" >Durration: </label>
                <fieldset name="DurrationItem">
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DurrationItem"
                        value="regular-upkeep" 
                        onChange={this.updateDurrationItem }
                        />
                    <label htmlFor="upkeep">Regular-Upkeep (1 hour or less)</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DurrationItem"
                        value="fast-task" 
                        onChange={this.updateDurrationItem }
                        />
                    <label htmlFor="task">Fast-Task (30 min or less)</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DurrationItem"
                        value="quick-bit" 
                        onChange={this.updateDurrationItem }
                        />
                    <label htmlFor="bit">Quick-bit (10 mins or less)</label>
                </fieldset>
            </div>
        );
    }
}

export default Durration;