import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

export default function SubmitBTN(props) {

    const saveProps = props.saveProps;
    console.log("Saving Props: ", props.saveProps);

    return (
        <div>
     <button type="submit" onClick={saveProps} className="submitBTN">Submit</button>
    </div>
    );
}