import React, { Component, useState } from "react";

import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');



export default function WeekRepeat(props) {

    // WeekSchedule = []



    const ScheduleValue = (() => {
        // if (document.getElementById(monday).check) {
        //     WeekSchedule[0] = (props.getElementById(monday))
        // } else {
        //     WeekSchedule[0] = ('null')
        // }
        // if (document.getElementById(tuesday).check) {
        //     WeekSchedule[1] = (props.getElementById(tuesday))
        // } else {
        //     WeekSchedule[1] = ('null')
        // }
        // if (document.getElementById(wednesday).check) {
        //     WeekSchedule[2] = (props.getElementById(wednesday))
        // } else {
        //     WeekSchedule[2] = ('null')
        // }
        // if (document.getElementById(thursday).check) {
        //     WeekSchedule[3] = (props.getElementById(thursday))
        // } else {
        //     WeekSchedule[3] = ('null')
        // }
        // if (document.getElementById(friday).check) {
        //     WeekSchedule[4] = (props.getElementById(friday))
        // } else {
        //     WeekSchedule[4] = ('null')
        // }
        // if (document.getElementById(saturday).check) {
        //     WeekSchedule[5] = (props.getElementById(saturday))
        // } else {
        //     WeekSchedule[5] = ('null')
        // }
        // if (document.getElementById(sunday).check) {
        //     WeekSchedule[6] = (props.getElementById(sunday))
        // } else {
        //     WeekSchedule[6] = ('null')
        // }

        console.log('ScheduledValue ran')

    })();

    // const [on, setOn] = useState(false);

    // if (on === true) {
    //     const ScheduleValue = props.WeekItem
    //     WeekSchedule.push(ScheduleValue)
    // }

    // var WeekItem = props.WeekItem;

    // WeekObject = props.WeekSchedule

    //   WeekObject = WeekSchedule

    // console.log(`WeekObject:`, WeekObject);

        return (
            <div>
                <label htmlFor="WeekItem" >Week Days to Repeat: </label>
                <fieldset name="WeekItem">
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="WeekItem" 
                    value="monday" 
                    id="monday" 
                    // onChange={ ScheduleValue() }
                    />
                    <label htmlFor="monday">Monday</label>
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="WeekItem" 
                    value="tuesday" 
                    id="tuesday" 
                    // onChange={ ScheduleValue() }
                    />
                    <label htmlFor="tuesday">Tuesday</label>
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="WeekItem" 
                    value="wednesday" 
                    id="tuesday" 
                    // onChange={ ScheduleValue() }
                    />
                    <label htmlFor="wednesday">Wednesday</label>
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="WeekItem" 
                    value="thursday" 
                    id="tuesday" 
                    // onChange={ ScheduleValue() }
                    />
                    <label htmlFor="thursday">Thursday</label>
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="WeekItem" 
                    value="friday"
                    id="tuesday" 
                    // onChange={ ScheduleValue() }
                     />
                    <label htmlFor="friday">Friday</label>
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="WeekItem" 
                    value="saturday" 
                    id="tuesday" 
                    // onChange={ ScheduleValue() }
                    />
                    <label htmlFor="saturday">Saturday</label>
                    <input 
                    type="checkbox" 
                    className="radioBTN"
                    name="WeekItem" 
                    value="sunday"
                    id="tuesday" 
                    // onChange={ ScheduleValue() }
                     />
                    <label htmlFor="sunday">Sunday</label>
                </fieldset>
            </div>
        );
    }

