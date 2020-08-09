import React, { Component } from "react";
import "../style.css";

var itemData = require("../../data/item");

class ItemName extends React.Component {

    state = {
        ItemState: "",
    }

    updateInputValue2 = f => {

        const value7 = f.target.value

        this.setState({ ItemState: value7 });
    };



    render() {
        const { ItemState } = this.state.ItemState;

        itemData.unshift(this.state.ItemState)
      
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
                />
            </div>
        );
    }

}

export default ItemName;