import React, { Component } from "react";
import "./style.css";
import Moment from 'react-moment';
import 'moment-timezone';
const moment = require('moment');

class Form extends Component {
    state = {

    }


    render() {

        return (
            <div>
                <h1>New Habit Form</h1>
                <form action="/habits" method="POST">


                </form>
            </div>
        );
    }
}

export default Form;