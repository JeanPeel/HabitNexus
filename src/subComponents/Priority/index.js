import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');


export default function Priority(props) {
    
    let PriorityValue

    const [on, setOn] = useState(false);

    const ScheduleValue1 = (() => {
        if (on === true) {
            PriorityValue = (document.getElementById(high).value)
        }
    })();

    const ScheduleValue2 = (() => {
        if (on === true) {
            PriorityValue = (document.getElementById(medium).value)
        }
    })();
 
    const ScheduleValue3 = (() => {
        if (on === true) {
            PriorityValue = (document.getElementById(low).value)
        }
    })();

    // var WeekItem = props.WeekItem;


        return (
            <div>
                <label htmlFor="PriorityItem" >Priority: </label>
                <fieldset name="PriorityItem">
                    <input 
                    type="radio" 
                    className="radioBTN"
                    name="PriorityItem" 
                    value="high" 
                    id="high"
                    onChange={() => setOn(!on).then(ScheduleValue1())}
                    />
                    <label htmlFor="high">High</label>
                    <input 
                    type="radio" 
                    className="radioBTN"
                    name="PriorityItem" 
                    value="medium" 
                    onChange={() => setOn(!on).then(ScheduleValue2())}
                    />
                    <label htmlFor="medium">Medium</label>
                    <input 
                    type="radio" 
                    className="radioBTN"
                    name="PriorityItem" 
                    value="low" 
                    onChange={() => setOn(!on).then(ScheduleValue3())}
                    />
                    <label htmlFor="low">Low</label>
                </fieldset>
            </div>
        );
    }


export default Priority;