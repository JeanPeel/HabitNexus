import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

export default function Difficulty(props) {
    
    let DifficultyValue

    const [on, setOn] = useState(false);

    const DifficultyValue1 = (() => {
        if (on === true) {
            DifficultyValue = (document.getElementById(difficult).value)
        }
    })();

    const DifficultyValue2 = (() => {
        if (on === true) {
            DifficultyValue = (document.getElementById(moderate).value)
        }
    })();
 
    const DifficultyValue3 = (() => {
        if (on === true) {
            DifficultyValue = (document.getElementById(easy).value)
        }
    })();

    // var WeekItem = props.WeekItem;


        return (
            <div>
                <label htmlFor="DifficultyItem" >Difficulty Level: </label>
                <fieldset name="DifficultyItem">
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DifficultyItem"
                        value="difficult"
                        id="difficult"
                        onChange={() => setOn(!on).then(DifficultyValue1())}
                    />
                    <label htmlFor="difficult">Difficult</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DifficultyItem"
                        value="moderate"
                        id="moderate"
                        onChange={() => setOn(!on).then(DifficultyValue1())}
                    />
                    <label htmlFor="moderate">Moderate</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="DifficultyItem"
                        value="easy"
                        id="easy"
                        onChange={() => setOn(!on).then(DifficultyValue1())}
                    />
                    <label htmlFor="easy">Easy</label>
                </fieldset>
            </div>
        );
    }


export default Difficulty;