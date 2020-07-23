import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');



class Priority extends React.Component {

    state = {
        PriorityItem: "unchanged",
    };

    updatePriorityItem = PriorityItem => {
        this.setState({ PriorityItem });
        console.log(`PriorityItem:`, PriorityItem)
    };

    render() {

        const { PriorityItem } = this.state;

        return (
            <div>
                <label htmlFor="PriorityItem" >Priority: </label>
                <fieldset name="PriorityItem">
                    <input 
                    type="radio" 
                    className="radioBTN"
                    name="PriorityItem" 
                    value="high" 
                    onChange={this.updateDurrationItem }
                    />
                    <label htmlFor="high">High</label>
                    <input 
                    type="radio" 
                    className="radioBTN"
                    name="PriorityItem" 
                    value="medium" 
                    onChange={this.updateDurrationItem }
                    />
                    <label htmlFor="medium">Medium</label>
                    <input 
                    type="radio" 
                    className="radioBTN"
                    name="PriorityItem" 
                    value="low" 
                    onChange={this.updateDurrationItem }
                    />
                    <label htmlFor="low">Low</label>
                </fieldset>
            </div>
        );
    }
}

export default Priority;