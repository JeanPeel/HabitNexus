import React, { Component } from "react";
import "../style.css";

var linkInfo = require("../../data/linkinfo");

class AddLink extends React.Component {


    state = {

        linkstate: "",

    }

    updateInputValue = e => {

        const value2 = e.target.value

        this.setState({ linkstate: value2 });

    };



    render() {

        var { linkstate } = this.state.linkstate;

        linkInfo.unshift(this.state.linkstate)

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
                    linkstate={this.state.linkstate}
                />
            </div>
        );
    }
}

export default AddLink;