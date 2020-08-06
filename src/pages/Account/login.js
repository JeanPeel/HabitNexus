import React, { Component } from "react";
import "./style.css";
// import axios from 'axios';

import UserName from "../../formElements/UserName";
// import ItemEmail from "../../formElements/ItemEmail";
import ItemPassword from "../../formElements/ItemPassword";
import SubmitBTN from "../../formElements/SubmitBTN";

class Login extends Component {



    render() {

        // this is not running
        console.log('render ran on login')

        return (
            <div>
                <h1>Login</h1>
                <form id="form">
                    {/* <form action="/login"  method="POST" id="form"> */}
                    <UserName />
                    <ItemPassword />
                    <SubmitBTN />
                </form>
            </div>
        );
    }
}

export default Login;