import React, { Component } from "react";
import "../style.css";

var formData = require("../../data/formData");

class ItemName extends React.Component {

    state = {
        ItemState: "",
    }

    
    componentDidMount() {

        formData[1] = "none"
    }

    updateInputValue2 = f => {

        const value7 = f.target.value

        this.setState({ ItemState: value7 });

        formData[1] = value7
    };



    render() {
        const { ItemState } = this.state.ItemState;
      
        return (
            <div>
                <label htmlFor="NameItem">Item Name: </label>
                <input
                    type="text"
                    name="NameItem"
                    value={ItemState}
                    placeholder="Add Item Name"
                    className="nameItem"
                    onChange={this.updateInputValue2}
                    required
                />
            </div>
        );
    }

}

export default ItemName;