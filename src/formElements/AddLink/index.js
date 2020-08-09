import React, { Component } from "react";
import "../style.css";

var formData = require("../../data/formData");

class AddLink extends React.Component {



    state = {

        linkstate: "",

    }

    componentDidMount() {

        formData[15] = "none"
    }

    updateInputValue = e => {

        const value2 = e.target.value

        this.setState({ linkstate: value2 });

        formData[15] = value2

        // console.log("formData: ", formData)

    };



    render() {

        var { linkstate } = this.state.linkstate;

        return (
            <div>
                <label htmlFor="linkitem" >Add Link to info or image (optional): </label>
                <input
                    type="url"
                    name="linkitem"
                    value={linkstate}
                    placeholder="Add a Link Here"
                    className="linkitem"
                    onChange={this.updateInputValue}
                />
            </div>
        );
    }
}

export default AddLink;