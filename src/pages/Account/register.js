import React, { Component } from "react";
import "./style.css";
// import axios from 'axios';

import ItemName from "../../subComponents/ItemName";
import ItemEmail from "../../subComponents/ItemEmail";
import ItemPassword from "../../subComponents/ItemPassword";
import SubmitBTN from "../../subComponents/SubmitBTN";

class Register extends Component {

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form action="/register" method="POST">
                    <ItemName />
                    <ItemEmail />
                    <ItemPassword />
                    <SubmitBTN />
                </form>
            </div>
        );
    }
}

export default Register;