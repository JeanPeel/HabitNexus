import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');



class WeekRepeat extends React.Component {

    state = {
        WeekItem: "unchanged",
    };

    updateWeekItem = WeekItem => {
        this.setState({ WeekItem });
        console.log(`WeekItem:`, WeekItem)
    };

    render() {

        const { WeekItem } = this.state;

        return (
            <div>
                <label htmlFor="WeekItem" >Week Days to Repeat: </label>
                <fieldset name="WeekItem">
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="WeekItem" 
                    value="monday" 
                    onChange={this.updateDurrationItem }
                    />
                    <label htmlFor="monday">Monday</label>
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="WeekItem" 
                    value="tuesday" 
                    onChange={this.updateDurrationItem }
                    />
                    <label htmlFor="tuesday">Tuesday</label>
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="WeekItem" 
                    value="wednesday" 
                    onChange={this.updateDurrationItem }
                    />
                    <label htmlFor="wednesday">Wednesday</label>
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="WeekItem" 
                    value="thursday" 
                    onChange={this.updateDurrationItem }
                    />
                    <label htmlFor="thursday">Thursday</label>
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="WeekItem" 
                    value="friday"
                    onChange={this.updateDurrationItem }
                     />
                    <label htmlFor="friday">Friday</label>
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="WeekItem" 
                    value="saturday" 
                    onChange={this.updateDurrationItem }
                    />
                    <label htmlFor="saturday">Saturday</label>
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="WeekItem" 
                    value="sunday"
                    onChange={this.updateDurrationItem }
                     />
                    <label htmlFor="sunday">Sunday</label>
                </fieldset>
            </div>
        );
    }
}

export default WeekRepeat;