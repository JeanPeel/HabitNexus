var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HabitModel = new Schema({
    DateItem: String,
    NameItem: String,
    selectedCategory: String,
    PriorityValue: String,
    DifficultyValue: String,
    DurrationValue: String,
    WeekObject: Object,
    TimeDay: String,
    linkitem: String,
    score: {type: Number, default: 0}
});

const Habit = mongoose.model('Habit', HabitModel);
module.exports = Habit;