import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

class ItemEmail extends React.Component {

    state = {
        EmailItem: ""
    };

    updateInputValue5 = i => {
        this.setState({ EmailItem: i.target.value });
        console.log("EmailItem: ", i.target.value )
    };

    

    render() {
        const { EmailItem } = this.state;
   
        return (
            <div>
                <label htmlFor="EmailItem">Email Name: </label>
                <input
                    type="email"
                    id="email"
                    name="EmailItem"
                    value={EmailItem}
                    onChange={this.updateInputValue5}
                    placeholder="Add Email Address"
                    className="emailItem"
                    required />
            </div>
         );
        }

    }

    export default ItemEmail;