import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');



class Durration extends React.Component {

    state = {
        DurrationItem: ""
    };

    updateInputValue8 = l => {
        this.setState({ DurrationItem: l.target.id });
        console.log("DurrationItem: ", l.target.id)
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
                        id="regular-upkeep <10min"
                        value={DurrationItem}
                        onChange={this.updateInputValue8}
                    />
                    <label htmlFor="upkeep">Regular-Upkeep (1 hour or less)</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DurrationItem"
                        id="fast-task <30min"
                        value={DurrationItem}
                        onChange={this.updateInputValue8}

                    />
                    <label htmlFor="task">Fast-Task (30 min or less)</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DurrationItem"
                        id="quick-bit <1hour"
                        value={DurrationItem}
                        onChange={this.updateInputValue8}
                    />
                    <label htmlFor="bit">Quick-bit (10 mins or less)</label>
                </fieldset>
            </div>
        );
    }

}

export default Durration;

