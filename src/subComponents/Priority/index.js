import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');



class Priority extends Component {

    constructor() {
        super();
        this.state = {
            name: "React"
        };
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(event) {
        console.log(event.target.value);
    }

    render() {

        return (
            <div>
                <label for="priority" >Priority: </label>
                <fieldset name="priority">
                    <input 
                    type="radio" 
                    className="radioBTN"
                    name="priority" 
                    value="high" 
                    />
                    <label for="high">High</label>
                    <input 
                    type="radio" 
                    className="radioBTN"
                    name="priority" 
                    value="medium" 
                    />
                    <label for="medium">Medium</label>
                    <input 
                    type="radio" 
                    className="radioBTN"
                    name="priority" 
                    value="low" 
                    />
                    <label for="low">Low</label>
                </fieldset>
            </div>
        );
    }
}

export default Priority;