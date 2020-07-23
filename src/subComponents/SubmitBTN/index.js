import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');



class SubmitBTN extends React.Component {

    // const saveProps = props.saveProps;
    // console.log("Saving Props: ", props.saveProps);

    state = {
        saveProps: "unchanged",
    }

    handleChange = saveProps => {
        this.setState({ saveProps });
        console.log("Saving Props: ", saveProps);
    };

    render() {
        const { saveProps } = this.state;

        return (
            <div>
                <button type="submit" onClick={this.saveProps} className="submitBTN">Submit</button>
            </div >
        );
    }
}

export default SubmitBTN;