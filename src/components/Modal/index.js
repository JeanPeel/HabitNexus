import React, { Component } from "react";
import "../style.css";

class Modal extends React.Component {

    state = {
        HabitItem: '',
        LinkState: "",
        DateState: "",
        updateDateState: "",
        NameState: "",
        CategoryState: "",
        DifficultyState: "",
        DurrationState: "",
        PriorityState: "",
        TODState: "",
        HourState: "",
        WeekState: "",
        FormState: "",
        show: false,
        newHabit: {
            PriorityItem: "",
            LinkItem: "",
            DateItem: "",
            updateDateItem: "",
            NameItem: "",
            CategoryItems: "",
            DifficultyItem: "",
            DurrationItem: "",
            selectedTOD: "",
            selectedHour: "",
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
    }



    showModal = y => {

        this.setState({
            show: !this.state.show
        });


    }

    onClose = x => {
        this.props.show = false;
      };


    render() {

        // var AutoDate = moment().format("MM/DD/YYYY")

        const { FormState } = this.state.FormState;
        const { LinkState } = this.state.LinkState;
        const { CategoryState } = this.state.CategoryState;
        const { DifficultyState } = this.state.DifficultyState;
        const { DurrationState } = this.state.DurrationState;
        const { HourState } = this.state.HourState;
        const { DateState } = this.state.DateState;
        const { NameState } = this.state.NameState;
        const { PriorityState } = this.state.PriorityState;
        const { TODState } = this.state.TODState;
        const { WeekState } = this.state.WeekState;

        const { newHabit } = this.state.newHabit;

        const { LinkItem } = this.state.newHabit.LinkItem;
        var { CategoryItems } = this.state.newHabit.CategoryItems;
        const { DifficultyItem } = this.state.newHabit.DifficultyItem;
        const { DurrationItem } = this.state.newHabit.DurrationItem;
        var { selectedHour } = this.state.newHabit.selectedHour;
        const { DateItem } = this.state.newHabit.DateItem
        const { NameItem } = this.state.newHabit.NameItem;
        const { PriorityItem } = this.state.newHabit.PriorityItem;
        const { selectedTOD } = this.state.newHabit.selectedTOD
        const { WeekSchedule } = this.state.newHabit.WeekSchedule;

        console.log("newHabit on Modal: ", this.state.newHabit)

        if (!this.props.show) {
            return null;
        }

        return (
            <div id="results-modal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="close" data-dismiss="modal">&times;</button>
                            <h2 className="modal-title"><strong>New Habit Item</strong></h2>
                        </div>
                        <div className="modal-body">
                            <div id="itemDate"></div>
                            <div id="itemName"></div>
                            <div id="itemCat"></div>
                            <div id="itemPri"></div>
                            <div id="itemDif"></div>
                            <div id="itemDur"></div>
                            <div id="itemWeek"></div>
                            <div id="itemTOD"></div>
                            <div id="itemHour"></div>
                            <div id="itemLink"></div>
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-default"
                                onClose={x => {
                                    this.props.onClose && this.props.onClose(x);
                                }}
                                data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

export default Modal;
