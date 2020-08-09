var timeOfDay = require("../../data/timeOfDay");
var categories = require("../../data/categories");
var hours = require("../../data/hours");
var weekdays = require("../../data/weekdays");

module.exports = function (app) {


    app.get("/api/timeOfDay", function (req, res) {
        res.json(timeOfDay);
    });

    app.get("/api/categories", function (req, res) {
        res.json(categories);
    });

    app.get("/api/hours", function (req, res) {
        res.json(hours);
    });

    app.get("/api/weekdays", function (req, res) {
        res.json(weekdays);
    });

    app.post("/api/timeOfDay", function (req, res) {

        res.json(timeOfDay);
    });

    app.post("/api/categories", function (req, res) { 

        res.json(categories);

    });

    app.post("/api/hours", function (req, res) {

        res.json(hours);
    });

    app.post("/api/weekdays", function (req, res) { 

        res.json(weekdays);

    });

};