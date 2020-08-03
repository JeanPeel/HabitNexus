import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');




    class Priority extends React.Component {

        state = {
            PriorityItem: ""
        };
    
        updateInputValue9 = m => {
            this.setState({ PriorityItem: m.target.id });
            console.log("PriorityItem: ", m.target.id )
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
                    id="high"
                    value={PriorityItem}
                    onChange={this.updateInputValue9}
                />
                <label htmlFor="high">High</label>
                <input
                    type="radio"
                    className="radioBTN"
                    name="PriorityItem"
                    id="medium"
                    value={PriorityItem}
                    onChange={this.updateInputValue9}
            
                />
                <label htmlFor="medium">Medium</label>
                <input
                    type="radio"
                    className="radioBTN"
                    name="PriorityItem"
                    id="low"
                    value={PriorityItem}
                    onChange={this.updateInputValue9}
                />
                <label htmlFor="low">Low</label>
            </fieldset>
        </div>
    );
}

}

export default Priority;
