var timeOfDay = require("../../data/timeOfDay");
var categories = require("../../data/categories");



module.exports = function (app) {


    app.get("/api/timeOfDay", function (req, res) {
        res.json(timeOfDay);
    });

    app.get("/api/categories", function (req, res) {
        res.json(categories);
    });

    app.post("/api/timeOfDay", function (req, res) {

        res.json(timeOfDay);
    });

    app.post("/api/categories", function (req, res) { 

        res.json(categories);

    });

};