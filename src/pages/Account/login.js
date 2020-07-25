import React, { Component } from "react";
import "./style.css";
// import axios from 'axios';

import UserName from "../../subComponents/UserName";
// import ItemEmail from "../../subComponents/ItemEmail";
import ItemPassword from "../../subComponents/ItemPassword";
import SubmitBTN from "../../subComponents/SubmitBTN";

class Login extends Component {

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form action="/register" method="POST">
                    <UserName />
                    <ItemPassword />
                    <SubmitBTN />
                </form>
            </div>
        );
    }
}

export default Login;