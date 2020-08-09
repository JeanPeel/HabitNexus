import React, { Component } from "react";
import "./style.css";
import axios from 'axios';
// import Moment from 'react-moment';
// import 'moment-timezone';

import AddLink from "../formElements/AddLink";
import Category from "../formElements/Category";
import Durration from "../formElements/Durration";
import ItemName from "../formElements/ItemName";
import Priority from "../formElements/Priority";
import SubmitBTN from "../formElements/SubmitBTN";
import TOD from "../formElements/TOD";
import Hours from "../formElements/Hours";
import WeekRepeat from "../formElements/WeekRepeat";
import ItemDate from "../formElements/ItemDate";
import Difficulty from "../formElements/Difficulty";
// import Modal from "../components/Modal";

var formData = require("../data/formData");



var linkitem = "";
var DateItem = "";
var updateDateItem = "";
var NameItem = "";
var CategoryItems = "";
var DifficultyItem = "";
var DurrationItem = "";
var PriorityItem = "";
var selectedTOD = "";
var selectedHour = "";
var WeekSchedule = "";

const moment = require('moment');

class Form extends Component {
    state = {
        HabitItem: '',
        PriorityState: "",
        linkstate : "",
        DateState: "",
        updateDateState: "",
        ItemState: "",
        CategoryState: "",
        DifficultyState: "",
        DurrationState: "",
        PriorityState: "",
        TODState: "",
        HourState: "",
        WeekState: "",
        FormState: "",
            WeekSchedule: {
                Monday: false,
                Tuesday: false,
                Wednesday: false,
                Thursday: false,
                Friday: false,
                Saturday: false,
                Sunday: false
            }
    }

    componentDidMount() {
        formData.length = 0

        console.log('formdata should be empty: ', formData)

        formData.length = 0

        console.log('formdata should be empty: ', formData)
    }



    updateHabit = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })

        // this is not running
        console.log('updateHabit ran on Form')
    }

    updateInputValue = e => {

        e.preventDefault();

        // this is not running
        console.log('SaveHabit1 ran on Form')

 

        const newHabit = {
            PriorityItem: this.state.newHabit.PriorityItem,
            linkitem: this.state.newHabit.linkitem,
            DateItem: this.state.newHabit.DateItem,
            NameItem: this.state.newHabit.NameItem,
            CategoryItems: this.state.newHabit.CategoryItems,
            DifficultyItem: this.state.newHabit.DifficultyItem,
            DurrationItem: this.state.newHabit.DurrationItem,
            PriorityItem: this.state.newHabit.PriorityItem,
            selectedTOD: this.state.newHabit.selectedTOD,
            selectedHour: this.state.newHabit.selectedHour,
            WeekSchedule: this.state.newHabit.WeekSchedule
        }

        // this is not running
        console.log('SaveHabit2 ran on Form')

        axios
            .post("/HabitNexus2", newHabit)
            .catch((error) => console.log("error on form.js: ", error));

        console.log('SaveHabit3 ran on Form')

        this.setState({
            HabitItem: '',
            newHabit: [],
        })

        // this is not running
        console.log('SaveHabit4 ran on Form')

    }



    // showModal = y => {

    //     this.setState({
    //         show: !this.state.show
    //     });


    // }

    // onClose = x => {
    //     this.props.show = false;
    //   };

    // habitData = (newHabit) => {

     
    //     console.log('HabitData1 ran on Form')

    //     document.getElementById('#itemDate').text(newHabit.DateItem);
    //     document.getElementById("#itemName").text(newHabit.NameItem);;
    //     document.getElementById("#itemCat").text(newHabit.CategoryItems);
    //     document.getElementById("#itemPri").text(newHabit.PriorityItem);
    //     document.getElementById("#itemDif").text(newHabit.DifficultyItem);
    //     document.getElementById("#itemDur").text(newHabit.DurrationItem);
    //     document.getElementById("#itemWeek").text(newHabit.WeekSchedule);
    //     document.getElementById("#itemTOD").text(newHabit.selectedTOD);
    //     document.getElementById("#itemHour").text(newHabit.selectedHour);
    //     document.getElementById("#itemLink").text(newHabit.linkitem);

    //     console.log('HabitData2 ran on Form')

    // }

    render() {

        // var AutoDate = moment().format("MM/DD/YYYY")

        // const { FormState } = this.state.FormState;
        // var { linkstate  } = this.state.linkstate ;
        // const { CategoryState } = this.state.CategoryState;
        // const { DifficultyState } = this.state.DifficultyState;
        // const { DurrationState } = this.state.DurrationState;
        // const { HourState } = this.state.HourState;
        // const { DateState } = this.state.DateState;
        // const { ItemState } = this.state.ItemState;
        // const { PriorityState } = this.state.PriorityState;
        // const { TODState } = this.state.TODState;
        // const { WeekState } = this.state.WeekState;

        // var { newHabit } = this.state.newHabit;

        // var { linkitem } = this.state.newHabit.linkitem;
        // var { CategoryItems } = this.state.newHabit.CategoryItems;
        // const { DifficultyItem } = this.state.newHabit.DifficultyItem;
        // const { DurrationItem } = this.state.newHabit.DurrationItem;
        // var { selectedHour } = this.state.newHabit.selectedHour;
        // const { DateItem } = this.state.newHabit.DateItem
        // const { NameItem } = this.state.newHabit.NameItem;
        // const { PriorityItem } = this.state.newHabit.PriorityItem;
        // const { selectedTOD } = this.state.newHabit.selectedTOD
        // const { WeekSchedule } = this.state.newHabit.WeekSchedule;

        // this is not running
        // console.log("newHabit on Form: ", this.state.newHabit)

        return (
            <div>
                <h1>New Habit Form</h1>
                <form
                    id="form"
                >
                    <ItemDate/>
                    <ItemName/>
                    <Category/>
                    <Priority/>
                    <Difficulty/>
                    <Durration/>
                    <WeekRepeat/>
                    <TOD/>
                    < Hours/>
                    <AddLink/>
                    <SubmitBTN/>
                    {/* <Modal
                        linkstate={this.state.linkstate}
                        linkitem={this.state.newHabit.linkitem}

                        HourState={this.state.HourState}
                        selectedHour={this.state.newHabit.selectedHour}

                        TODState={this.state.TODState}
                        selectedTOD={this.state.newHabit.selectedTOD}

                        WeekState={this.state.WeekState}
                        WeekSchedule={this.state.newHabit.WeekSchedule}

                        DurrationState={this.state.DurrationState}
                        DurrationItem={this.state.newHabit.DurrationItem}

                        DifficultyState={this.state.DifficultyState}
                        DifficultyItem={this.state.newHabit.DifficultyItem}

                        PriorityState={this.state.PriorityState}
                        PriorityItem={this.state.newHabit.PriorityItem}

                        CategoryState={this.state.CategoryState}
                        CategoryItems={this.state.newHabit.CategoryItems}

                        ItemState={this.state.ItemState}
                        NameItem={this.state.newHabit.NameItem}

                        DateState={this.state.DateState}
                        DateItem={this.state.newHabit.DateItem}

                        newHabit={this.state.newHabit}

                        show={this.state.show}
                        onClose={this.showModal}
                    /> */}
                </form>
            </div>
        );
    }
}

export default Form;