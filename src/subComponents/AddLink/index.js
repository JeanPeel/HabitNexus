import React, { Component } from "react";
import "../style.css";
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

class AddLink extends React.Component {

    state = {
        LinkItem: "unchanged",
    };

    updateLinkItem = LinkItem => {
        this.setState({ LinkItem });
        console.log(`LinkItem:`, LinkItem);
    };

    render() {
        const { LinkItem } = this.state;


    return (
        <div>
        <label htmlFor="LinkItem" >Add Link to info or image (optional): </label>
        <input 
        type="url" 
        name="LinkItem" 
        value={LinkItem} 
        onChange={this.updateLinkItem}
        placeholder="Add a Link Here" 
        className="linkItem"
        />
    </div>
    );
}
}

export default AddLink;