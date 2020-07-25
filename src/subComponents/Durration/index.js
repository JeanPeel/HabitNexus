import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

export default function Durration(props) {
    
    let DurrationValue

    const [on, setOn] = useState(false);

    const DurrationValue1 = (() => {
        if (on === true) {
            DurrationValue = (document.getElementById(regular-upkeep).value)
        }
    })();

    const DurrationValue2 = (() => {
        if (on === true) {
            DurrationValue = (document.getElementById(fast-task).value)
        }
    })();
 
    const DurrationValue3 = (() => {
        if (on === true) {
            DurrationyValue = (document.getElementById(quick-bit).value)
        }
    })();

    console.log("DurrationValue", DurrationValue)

    // var WeekItem = props.WeekItem;


        return (
            <div>
                <label htmlFor="DurrationItem" >Durration: </label>
                <fieldset name="DurrationItem">
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DurrationItem"
                        value="regular-upkeep" 
                        id="regular-upkeep"
                        onChange={() => setOn(!on).then(DurrationValue1())}
                        />
                    <label htmlFor="upkeep">Regular-Upkeep (1 hour or less)</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DurrationItem"
                        value="fast-task" 
                        id="fast-task"
                        onChange={() => setOn(!on).then(DurrationValue2())}
                        />
                    <label htmlFor="task">Fast-Task (30 min or less)</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DurrationItem"
                        value="quick-bit" 
                        id="quick-bit"
                        onChange={() => setOn(!on).then(DurrationValue3())}
                        />
                    <label htmlFor="bit">Quick-bit (10 mins or less)</label>
                </fieldset>
            </div>
        );
    }


export default Durration;