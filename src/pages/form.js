import React, { Component } from "react";
import "./style.css";
import axios from 'axios';
// import Moment from 'react-moment';
// import 'moment-timezone';
// const moment = require('moment');

import AddLink from "../subComponents/AddLink";
import Category from "../subComponents/Category";
import Durration from "../subComponents/Durration";
import ItemName from "../subComponents/ItemName";
import Priority from "../subComponents/Priority";
import SubmitBTN from "../subComponents/SubmitBTN";
import TOD from "../subComponents/TOD";
import WeekRepeat from "../subComponents/WeekRepeat";
import ItemDate from "../subComponents/ItemDate";
import Difficulty from "../subComponents/Difficulty";

class Form extends Component {
    state = {
        HabitItem: '',
        HabitList: [
            {
                Item: 'this is an item',
                ItemCat: 'this is a category',
                Date: 'today',
                Date2: 'today2',
                ItemTime: 'this is the TOD',
                Weakly: 'This is the days of the week',
                Dificult: 'this is dificult',
                Prioritize: 'this is prioritized',
                ItemLength: 'this is the durration',
                Link: 'this is a link',
            }
        ]
    }

    updateLink= (event) => {
        const { name, value } = event.target;
    
        this.setState({
          [name]: value
        })
      }

      saveLink = (event) => {

        event.preventDefault();

        var LinkItem = this.state.LinkItem;

        var DateItem = this.state.DateItem;
    
        var updateDateItem = this.state.DateItem;
    
        var NameItem = this.state.NameItem;
    
        const newHabit = {
            Item: NameItem,
            ItemCat: 'this is a category',
            Date: DateItem,
            Date2: updateDateItem,
            ItemTime: 'this is the TOD',
            Weakly: 'This is the days of the week',
            Dificult: 'this is dificult',
            Prioritize: 'this is prioritized',
            ItemLength: 'this is the durration',
            Link: LinkItem
        }
    
        axios
          .post("/HabitNexus2", newHabit)
          .catch((error) => console.log(error));
    
    
        this.setState({
          HabitList: this.state.HabitList.concat(newHabit),
          HabitItem: ''
        })
    
      }

    render() {

        return (
            <div>
                <h1>New Habit Form</h1>
                {/* <form action="/habits" method="POST" id="form"> */}
                <form id="form">
                    <ItemDate />
                    <ItemName/>
                    <Category/>
                    <Priority/>
                    <Difficulty/>
                    <Durration/>
                    <WeekRepeat/>
                    <TOD/>
                    <AddLink
                      LinkItem = {this.state.LinkItem}
                      updateLink = {this.updateLink}
                 
                    />
                    <SubmitBTN
                         saveLink = {this.saveLink}
                         />
                </form>
            </div>
        );
    }
}

export default Form;