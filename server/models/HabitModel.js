var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HabitModel = new Schema({
    DateItem: String,
    NameItem: String,
    selectedCategory: String,
    PriorityItem: String,
    DifficultyItem: String,
    DurrationItem: String,
    WeekItem: String,
    TimeDay: String,
    LinkItem: String,
    score: {type: Number, default: 0}
});

const Habit = mongoose.model('Habit', HabitModel);
module.exports = Habit;