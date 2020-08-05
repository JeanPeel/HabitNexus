import React, { Component } from "react";
import "../style.css";

class Priority extends React.Component {

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

    updateInputValue9 = m => {

        const value1 = m.target.id

        this.setState({ PriorityState: value1 });

        this.setState({ newHabit: { PriorityItem: value1 } });

        // console.log("newHabit: ", this.state.newHabit)

    };



    render() {

        const { PriorityState } = this.state.PriorityState;

        const { newHabit } = this.state.newHabit;

        const { PriorityItem } = this.state.newHabit.PriorityItem;

        console.log("newHabit: ", this.state.newHabit)

        return (
            <div>
                <label htmlFor="PriorityItem" >Priority: </label>
                <fieldset name="PriorityItem">
                    <input
                        type="radio"
                        className="radioBTN"
                        name="PriorityItem"
                        id="high"
                        value={PriorityItem}
                        onChange={this.updateInputValue9}
                    />
                    <label htmlFor="high">High</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="PriorityItem"
                        id="medium"
                        value={PriorityItem}
                        onChange={this.updateInputValue9}

                    />
                    <label htmlFor="medium">Medium</label>
                    <input
                        type="radio"
                        className="radioBTN"
                        name="PriorityItem"
                        id="low"
                        value={PriorityItem}
                        onChange={this.updateInputValue9}
                    />
                    <label htmlFor="low">Low</label>
                </fieldset>
            </div>
        );
    }

}

export default Priority;
