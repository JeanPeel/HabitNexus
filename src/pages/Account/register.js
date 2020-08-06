import React, { Component } from "react";
import "./style.css";
// import axios from 'axios';

import UserName from "../../formElements/UserName";
import ItemEmail from "../../formElements/ItemEmail";
import ItemPassword from "../../formElements/ItemPassword";
import SubmitBTN from "../../formElements/SubmitBTN";

class Register extends Component {

    render() {

        // this is not running
        console.log('render ran on register')

        return (
            <div>
                <h1>Register</h1>

                {/* <form action="/register"  method="POST" id="form"> */}
                <form id="form">
                    <UserName />
                    <ItemEmail />
                    <ItemPassword />
                    <SubmitBTN />
                </form>
            </div>
        );
    }
}

export default Register;